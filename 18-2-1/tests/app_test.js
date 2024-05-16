import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";

import { echo } from "../app.js";

// implement tests here

Deno.test("Default message is echoechoecho!",() => {
        assertEquals(echo(),"echoechoecho!")
    }
)

Deno.test("Failed!",()=>{
        assertEquals(echo(),"echo")
    }
)

Deno.test("Other message is OTHERMESSAGE",() => {
        assertEquals(echo("OTHERMESSAGE"),"OTHERMESSAGE")
    }
)