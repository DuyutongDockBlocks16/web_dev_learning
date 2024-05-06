import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {getStore, setStore} from "./store.js";

const app = new Hono();

app.get("/", (c) => {

    let return_name = getStore();

    if(c.req.query("store")){
        return_name = c.req.query("store");
        setStore(return_name);
    }

    return c.text(`Store: ${return_name}`)
});

export default app;

// localhost:8000?name=Harry