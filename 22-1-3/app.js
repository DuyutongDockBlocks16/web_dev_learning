import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

// Route for handling GET requests to the root path for testing purposes
app.get("/", (c) => c.text("Hello!"));

// Route for handling POST requests to the root path
app.post("/", async (c) => {
    const body = await c.req.json();
    return c.json(body);
});

export default app;
