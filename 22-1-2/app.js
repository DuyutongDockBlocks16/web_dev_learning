import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

// Root path for testing
app.get("/", (c) => c.text("Hello!"));

// Route for /secret/:secret
app.get("/secret/:secret", (c) => {
    const secret = c.req.param("secret");
    return c.json({ secret });
});

export default app;