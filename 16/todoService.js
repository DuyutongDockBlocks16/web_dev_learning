const createTodo = async (userId, todo) => {
    todo.id = crypto.randomUUID();

    const kv = await Deno.openKv();
    await kv.set(["todos", userId, todo.id], todo);
};

const listTodos = async (userId) => {
    const kv = await Deno.openKv();
    const todoEntries = await kv.list({ prefix: ["todos", userId] });

    const todos = [];
    for await (const entry of todoEntries) {
        todos.push(entry.value);
    }

    return todos;
};

const getTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    const todo = await kv.get(["todos", userId, id]);
    return todo?.value ?? {};
};

const updateTodo = async (userId, id, todo) => {
    todo.id = id;
    const kv = await Deno.openKv();
    await kv.set(["todos", userId, id], todo);
};

const deleteTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    await kv.delete(["todos", userId, id]);
};

export { createTodo, listTodos , getTodo, updateTodo, deleteTodo};