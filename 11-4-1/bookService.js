const createBook = async (book) => {
    book.id = crypto.randomUUID();

    const kv = await Deno.openKv();
    await kv.set(["books", book.id], book);
};


const listBooks = async () => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["books"] });

    const books = [];
    for await (const entry of entries) {
        books.push(entry.value);
    }

    console.log(books)

    return books;
};

const getBook = async (id) => {
    const kv = await Deno.openKv();
    const book = await kv.get(["books", id]);
    // console.log(book);
    return book?.value ?? {};
};

const updateBook = async (id, book) => {
    book.id = id;
    const kv = await Deno.openKv();
    await kv.set(["books", id], book);
}

const deleteBook = async (id) => {
    const kv = await Deno.openKv();
    await kv.delete(["books", id]);
};

export { createBook, listBooks , getBook, updateBook, deleteBook};