<script>
    import { createBook } from "$lib/http-actions/books-api.js";

    let name = $state("");
    let pages = $state("");
    let isbn = $state("");

    const addBook = async () => {
        const book = { name, pages, isbn };
        const response = await createBook(book);
        if (response.error) {
            console.log(response.error);
            return;
        }

        name = "";
        pages = "";
        isbn = "";

        console.log("Book added!");
    };
</script>

<h1>Add a book:</h1>

<label for="name">Book name:</label>
<input type="text" id="name" name="name" bind:value={name} /><br />
<label for="pages">Number of pages:</label>
<input type="number" id="pages" name="pages" bind:value={pages} /><br />
<label for="isbn">ISBN:</label>
<input type="text" id="isbn" name="isbn" bind:value={isbn} /><br />
<button on:click={addBook}>Add</button>