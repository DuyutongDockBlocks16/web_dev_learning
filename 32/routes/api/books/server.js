export const POST = async ({ request }) => {
    const body = await request.json();
    if (!body.name || !body.pages || !body.isbn) {
        return json({ error: "Missing required fields" }, { status: 400 });
    }

    const book = {
        id: books.length + 1,
        name: body.name,
        pages: body.pages,
        isbn: body.isbn
    };

    books.push(book);

    return json(book, { status: 200 });
}