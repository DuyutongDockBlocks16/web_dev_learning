<script>
    let items = [];
    let inputText = '';

    function addItem() {
        if (inputText.trim() !== '') {
            items = [...items, inputText];
            inputText = '';
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
