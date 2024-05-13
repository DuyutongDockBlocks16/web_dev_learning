import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Define bookValidator
const bookValidator = z.object({
    name: z.string(),
    pages: z
        .coerce.number().min(1), // Ensure pages is at least 1
});

// Define personValidator
const personValidator = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z
        .coerce.number().min(0).max(120), // Ensure age is between 0 and 120
});

export { bookValidator, personValidator };
