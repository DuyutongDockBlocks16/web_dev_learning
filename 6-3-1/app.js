import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as services from "./feedbacks.js";

const app = new Hono();

app.get(
    "/feedbacks/1",
    async (c) => {
        const feedback = await services.getFeedback1();
        return c.text(`Feedback 1: ${feedback}`)
    }
);

app.post(
    "/feedbacks/1",
    async () => {
        await services.incrementFeedback1();
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
    async () => {
        await services.incrementFeedback2();
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
    async () => {
        await services.incrementFeedback3();
    }
)


export default app;
