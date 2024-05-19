import { Hono } from "./deps.js";

import * as todoController from "./todoController.js";

const app = new Hono();

app.get("/todos", todoController.showForm);
app.get("/todos/:id", todoController.showTodo);
app.post("/todos", todoController.createTodo);
app.post("/todos/:id", todoController.updateTodo);
app.post("/todos/:id/delete", todoController.deleteTodo);

export default app;