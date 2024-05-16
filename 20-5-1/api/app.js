import { Hono } from "./deps.js";
import { postgres } from "./deps.js";

const app = new Hono();
const sql = postgres();

app.get("/", async (c) => {
    const todos = await sql`SELECT * FROM todos`;
    return c.json(todos);
});

export default app;