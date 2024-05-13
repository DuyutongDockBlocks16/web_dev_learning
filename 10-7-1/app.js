import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as courseController from "./courseController.js";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
// import * as services from "../6-3-1/feedbacks";
import * as feedbacks from "./feedbacks.js";
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();

app.get("/courses", courseController.showForm);
app.get("/courses/:courseId", courseController.showCourse);
app.post("/courses", courseController.createCourse);
app.post("/courses/:courseId", courseController.updateCourse);
// app.post("/courses/:courseId", courseController.valueCourse);
app.post("/courses/:courseId/delete", courseController.deleteCourse);

app.get("/", async (c) => {
    return c.html(eta.render("index.eta"));
});

app.get("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    const feedbackCount = await feedbacks.getFeedbackCount(id);
    return c.text(`Feedback ${id}: ${feedbackCount}`);
});

app.post("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    await feedbacks.incrementFeedbackCount(id);
    return c.redirect("/");
});

export default app;