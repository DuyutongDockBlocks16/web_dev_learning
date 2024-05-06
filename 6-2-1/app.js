
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as store from "./store.js";

const app = new Hono();

app.get("/", async (c) => {
    if (c.req.query("store")) {
        await store.setStore(c.req.query("store"));
    }

    const return_name = await store.getStore();

    return c.text(`Store: ${return_name}`);
});

export default app;
