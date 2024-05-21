<script>
    // Declare a reactive variable to track the count
    let count = 0;

    // Function to increment the count
    function increment() {
        count += 1;
    }

    // Function to decrement the count
    function decrement() {
        count -= 1;
    }
</script>

<!-- Display the current count -->
<h1>Count: {count}</h1>

<!-- Buttons to change the count -->
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>
