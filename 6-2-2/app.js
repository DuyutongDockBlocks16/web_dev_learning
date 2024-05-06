import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as services from "./visits.js"

const app = new Hono();

app.get(
    "/",
    async (c) => {
        await services.incrementVisits();
        return c.text("Hello world!")
    }
);

app.get(
    "/visits",
    async (c) => {
        const visit_count = await services.getVisits();
        return c.text(`Visit count: ${visit_count}`)
    }
);

export default app;
