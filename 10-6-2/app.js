import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as bookController from "./bookController.js";

const app = new Hono();

app.get("/books", bookController.showForm);
app.get("/books/:id", bookController.showBook);
app.post("/books", bookController.createBook);
app.post("/books/:id", bookController.updateBook);
app.post("/books/:id/delete", bookController.deleteBook);

export default app;