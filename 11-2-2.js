import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Define bookValidator
const bookValidator = z.object({
    name: z.string(),
    pages: z.number().min(1),
    isbn: z.string(),
});

// Define personValidator
const personValidator = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
});

// Define courseValidator
const courseValidator = z.object({
    name: z.string(),
    teacher: personValidator, // Validate teacher as a person object
    book: bookValidator, // Validate book as a book object
});

export { bookValidator, personValidator, courseValidator };
