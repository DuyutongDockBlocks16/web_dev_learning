import { sql } from "./database.js";

const createTodo = async (todo) => {
    await sql`INSERT INTO todos (todo) VALUES (${ todo.todo })`;
};

const listTodos = async () => {
    return await sql`SELECT * FROM todos`;
};

const getTodo = async (id) => {
    const rows = await sql`SELECT * FROM todos WHERE id = ${ id }`;
    return rows?.[0] ?? {};
};
const updateTodo = async (id, todo) => {
    await sql`UPDATE todos SET todo = ${ todo.todo } WHERE id = ${ id }`;
};

const deleteTodo = async (id) => {
    await sql`DELETE FROM todos WHERE id = ${ id }`;
};

export { createTodo, deleteTodo, getTodo, listTodos, updateTodo };