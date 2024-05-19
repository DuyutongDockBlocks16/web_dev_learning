import { Eta } from "./deps.js";
import * as bookService from "./bookService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
    return c.html(
        eta.render("books.eta", { books: await bookService.listBooks() }),
    );
};

const createBook = async (c) => {
    const body = await c.req.parseBody();
    console.log(body);
    await bookService.createBook(body);
    return c.redirect("/books");
};

const showBook = async (c) => {
    const id = c.req.param("id");
    // console.log(id);

    return c.html(
        eta.render("book.eta", { book: await bookService.getBook(id) }),
    );
};

const updateBook = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await bookService.updateBook(id, body);
    return c.redirect(`/books/${id}`);
};

const deleteBook = async (c) => {
    const id = c.req.param("id");
    await bookService.deleteBook(id);
    return c.redirect("/books");
};

export { createBook, showForm, showBook, updateBook, deleteBook};