import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const booleanValidator = z.boolean(); // fix

const numberValidator = z.number(); // fix

const stringValidator = z.string(); // fix

export { booleanValidator, numberValidator, stringValidator };
