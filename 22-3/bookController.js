import {sql} from "./database.js";


const showForm = async (c) => {
    // return c.html(
    //     eta.render("books.eta", { books: await bookService.listBooks() }),
    // );

    return c.json(await sql`SELECT name, pages,isbn FROM books`);
};

const createBook = async (c) => {
    // const body = await c.req.parseBody();
    // console.log(body);
    // await bookService.createBook(body);
    // return c.redirect("/books");

    const body = await c.req.json();
    await sql`INSERT INTO books (name, pages,isbn) VALUES (${ body.name }, ${ body.pages }, ${ body.isbn })`;
    return c.json({ status: "ok" });
};

const showBook = async (c) => {
    // const id = c.req.param("id");
    // // console.log(id);
    //
    // return c.html(
    //     eta.render("book.eta", { book: await bookService.getBook(id) }),
    // );

    const id = c.req.param("id");
    const rows = await sql`SELECT name, pages,isbn FROM books WHERE id = ${ id }`;
    if (rows.length === 0) {
        return c.json({ status: "Not found" }, 404);
    }

    return c.json(rows[0]);
};

const updateBook = async (c) => {
    // const id = c.req.param("id");
    // const body = await c.req.parseBody();
    // await bookService.updateBook(id, body);
    // return c.redirect(`/books/${id}`);

    const id = c.req.param("id");
    const body = await c.req.json();
    await sql`UPDATE books SET  name = ${ body.name }, page = ${ body.pages }, isbn=  ${ body.isbn } WHERE id = ${ id }`;
    // here we assume that such an address exists -- could also check whether one exists
    return c.json({ status: "ok" });
};

const deleteBook = async (c) => {
    // const id = c.req.param("id");
    // await bookService.deleteBook(id);
    // return c.redirect("/books");

    const id = c.req.param("id");
    await sql`DELETE FROM books WHERE id = ${ id }`;
    // here we assume that such an address exists -- could also check whether one exists
    return c.json({ status: "ok" });
};

export { createBook, showForm, showBook, updateBook, deleteBook};