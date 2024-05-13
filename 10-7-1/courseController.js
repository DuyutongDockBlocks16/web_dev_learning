import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
    return c.html(
        eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
};

const createCourse = async (c) => {
    const body = await c.req.parseBody();
    console.log(body);
    await courseService.createCourse(body);
    return c.redirect("/courses");
};

const showCourse = async (c) => {
    const courseId = c.req.param("courseId");
    // console.log(courseId);
    return c.html(
        eta.render("course.eta", { course: await courseService.getCourse(courseId) }),
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