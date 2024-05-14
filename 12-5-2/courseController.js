import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import {
    getSignedCookie,
    setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const sessionCounts = new Map();
const secret = "secret";

const getAndIncrementCount = (sessionId, courseId) => {
    const idCombination = sessionId+courseId;
    let count = sessionCounts.get(idCombination) ?? 0;
    count++;
    sessionCounts.set(idCombination, count);
    return count;
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
    const count = getAndIncrementCount(sessionId, courseId);

    return c.html(
        eta.render("course.eta", { course: await courseService.getCourse(courseId), count: count}),
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

export { createCourse, showForm, showCourse, updateCourse, deleteCourse};