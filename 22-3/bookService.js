import { sql } from "./database.js";
const createBook = async (book) => {
    // book.id = crypto.randomUUID();
    //
    // const kv = await Deno.openKv();
    // await kv.set(["books", book.id], book);

    await sql`INSERT INTO books (name, pages,isbn) VALUES (${ book.name }, ${ book.pages }, ${ book.isbn })`;

};


const listBooks = async () => {
    // const kv = await Deno.openKv();
    // const entries = await kv.list({ prefix: ["books"] });
    //
    // const books = [];
    // for await (const entry of entries) {
    //     books.push(entry.value);
    // }
    //
    // console.log(books)
    //
    // return books;

    return await sql`SELECT name, pages,isbn FROM books`;

};

const getBook = async (id) => {
    // const kv = await Deno.openKv();
    // const book = await kv.get(["books", id]);
    // // console.log(book);
    // return book?.value ?? {};

    const rows = await sql`SELECT name, pages,isbn FROM books WHERE id = ${ id }`;
    return rows?.[0] ?? {};

};

const updateBook = async (id, book) => {
    // book.id = id;
    // const kv = await Deno.openKv();
    // await kv.set(["books", id], book);

    await sql`UPDATE books SET  name = ${ book.name }, page = ${ book.pages }, isbn=  ${ book.isbn } WHERE id = ${ id }`;
}

const deleteBook = async (id) => {
    // const kv = await Deno.openKv();
    // await kv.delete(["books", id]);

    await sql`DELETE FROM books WHERE id = ${ id }`;

};

export { createBook, listBooks , getBook, updateBook, deleteBook};