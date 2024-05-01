import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) => {


    if(c.req.query("operation") && c.req.query("number1") && c.req.query("number2")){
        if(c.req.query("operation") === "sum"){
            const result = Number(c.req.query("number1")) + Number(c.req.query("number2"));
            return c.text(`${result}`);
        } else if(c.req.query("operation") === "difference"){
            const result = Number(c.req.query("number1")) - Number(c.req.query("number2"));
            return c.text(`${result}`);
        }
    }
    return c.text("Invalid parameters.")
});

export default app;
