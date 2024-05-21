<script>
    // Reactive variable to track the count
    let count = 0;

    // Function to increment the count
    function increment() {
        count += 1;
    }

    // Function to reset the count to 0
    function reset() {
        count = 0;
    }
</script>

<!-- Display the current count -->
<h1>Count: {count}</h1>

<!-- Display messages based on the count value -->
{#if count === 1}
    <p>Click, clickiti click click click.</p>
{/if}
{#if count === 5}
    <p>I know I'll get tired of these clicking exercises.</p>
{/if}

<!-- Buttons to change the count -->
<button on:click={increment}>Increment</button>
<button on:click={reset}>Reset</button>
