import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 4;

app.get("/", (c) => {
    if(count>1){
        count--;
        return c.text(count);
    }
    return c.text("Kaboom!");
});

export default app;