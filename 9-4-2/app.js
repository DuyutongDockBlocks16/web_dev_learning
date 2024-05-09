import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as services from "./feedbacks.js";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

app.get(
    "/",
    async (c) => {
        return c.html(
            eta.render("index.eta")
        )
    }
)

app.get(
    "/feedbacks/1",
    async (c) => {
        const feedback = await services.getFeedback1();
        return c.text(`Feedback 1: ${feedback}`)
    }
);

app.post(
    "/feedbacks/1",
    async (c) => {
        await services.incrementFeedback1();
        return c.redirect("/");
    }
)

app.get(
    "/feedbacks/2",
    async (c) => {
        const feedback = await services.getFeedback2();
        return c.text(`Feedback 2: ${feedback}`)
    }
);

app.post(
    "/feedbacks/2",
    async (c) => {
        await services.incrementFeedback2();
        return c.redirect("/");
    }
)

app.get(
    "/feedbacks/3",
    async (c) => {
        const feedback = await services.getFeedback3();
        return c.text(`Feedback 3: ${feedback}`)
    }
);

app.post(
    "/feedbacks/3",
    async (c) => {
        await services.incrementFeedback3();
        return c.redirect("/");
    }
)

app.get(
    "/feedbacks/4",
    async (c) => {
        const feedback = await services.getFeedback4();
        return c.text(`Feedback 3: ${feedback}`)
    }
);

app.post(
    "/feedbacks/4",
    async (c) => {
        await services.incrementFeedback4();
        return c.redirect("/");
    }
)

app.get(
    "/feedbacks/5",
    async (c) => {
        const feedback = await services.getFeedback5();
        return c.text(`Feedback 3: ${feedback}`)
    }
);

app.post(
    "/feedbacks/5",
    async (c) => {
        await services.incrementFeedback5();
        return c.redirect("/");
    }
)


export default app;
