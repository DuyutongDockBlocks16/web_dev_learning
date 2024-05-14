import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
    getCookie,
    setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// add functionality
app.get(
    "/",
    (c) =>{
        let name = getCookie(c, "name");
        console.log("get name");
        console.log(name);
        return c.html(
            eta.render("index.eta", name)
        )
    }
)
app.post(
    "/",
    async (c) =>{
        const body = await c.req.parseBody();
        const name = body.name
        console.log("post name");
        console.log(name);
        setCookie(c, "name", name);
        return c.redirect("/");
    }
)


export default app;
