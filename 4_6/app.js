import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

// Add functionality here
app.get(
    "/", (c) => {
        return c.text("Hi there!")
    },
)

app.get(
    "/congrats", (c) => {
        const heroOfTheDay = c.req.query("heroOfTheDay")
        return c.text(`Congrats, ${heroOfTheDay}!`)
    },
)

app.get(
    "/items/:id", (c) => {
        const id = c.req.param("id")
        return c.text(`Retrieving item ${id}.`)
    },
)

app.post(
    "/items", (c) => {
        return c.text(`Adding an item.`)
    },
)

export default app;
