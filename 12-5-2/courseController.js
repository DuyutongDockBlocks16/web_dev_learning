import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import {
    getSignedCookie,
    setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";
import * as feedbacks from "./feedbacks.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const sessionCounts = new Map();
const secret = "secret";

const getFeedbackFlag = (sessionId, courseId) => {
    const idCombination = sessionId+courseId;

    if (sessionCounts.get(idCombination) !== undefined){
        return true
    } else {
        return false
    }
};

const validator = z.object({
    "Course name": z.string({ message: "The course name should be a string of at least 4 characters." })
        .min(4,{ message: "The course name should be a string of at least 4 characters." }),
});


const showForm = async (c) => {
    return c.html(
        eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
};

const createCourse = async (c) => {
    const body = await c.req.parseBody();
    console.log(body);
    const validationResult = validator.safeParse(body);
    if (!validationResult.success) {
        return c.html(
            eta.render("courses.eta", {
                ...body,
                errors: validationResult.error.format(),
                courses: await courseService.listCourses()
            }),
        );
    }

    await courseService.createCourse(body);
    return c.redirect("/courses");
};

const showCourse = async (c) => {
    const courseId = c.req.param("courseId");
    // console.log(courseId);

    const sessionId = await getSignedCookie(c, secret, "sessionId") ??
        crypto.randomUUID();
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/",
    });
    const flag = getFeedbackFlag(sessionId, courseId);

    console.log(flag)

    return c.html(
        eta.render("course.eta", { course: await courseService.getCourse(courseId), flag: flag}),
    );
};

const updateCourse = async (c) => {
    const courseId = c.req.param("courseId");
    const body = await c.req.parseBody();

    await courseService.updateCourse(courseId, body);
    return c.redirect(`/courses/${courseId}`);
};

// const valueCourse = async (c) => {
//     const courseId = c.req.param("courseId");
//     const body = await c.req.parseBody();
//     await courseService.updateCourse(courseId, body);
//     return c.redirect(`/courses/${courseId}`);
// };

const deleteCourse = async (c) => {
    const id = c.req.param("courseId");
    // console.log(id);
    await courseService.deleteCourse(id);
    return c.redirect("/courses");
};

const getFeedback = async (c) => {
    const feedbackId = c.req.param("id");
    const courseId = c.req.param("courseId");

    const sessionId = await getSignedCookie(c, secret, "sessionId") ??
        crypto.randomUUID();
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/",
    });

    const feedbackIdInMap = await feedbacks.getFeedbackCount(courseId, sessionId, sessionCounts);

    if (Number(feedbackIdInMap) === feedbackId){
        return c.text(`Feedback ${feedbackId}: 1`);
    } else {
        return c.text(`Feedback ${feedbackId}: 0`);
    }
}

const setFeedback = async (c) => {
    const feedbackId = c.req.param("id");
    const courseId = c.req.param("courseId");

    const sessionId = await getSignedCookie(c, secret, "sessionId") ??
        crypto.randomUUID();

    await feedbacks.incrementFeedbackCount(courseId, sessionId, feedbackId, sessionCounts);
    return c.redirect(`/courses/${courseId}`);
}

export { createCourse, showForm, showCourse, updateCourse, deleteCourse, getFeedback, setFeedback};