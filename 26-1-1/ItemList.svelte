<script>
    let items = []; // This array will store the list items
    let inputText = ''; // This variable binds to the input field

    // Function to add an item to the list
    function addItem() {
        if (inputText.trim() !== '') {
            items = [...items, inputText]; // Add the input text to the items array
            inputText = ''; // Clear the input field
        }
    }
</script>

<label for="item">Type in the item name:</label>
<input id="item" type="text" bind:value={inputText} /><br/>
<button on:click={addItem}>Add</button>

<p>The list has {items.length} {items.length === 1 ? 'item' : 'items'}.</p>

<ul>
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
