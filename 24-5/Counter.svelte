<script>
    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<h1>Count: {count}</h1>

<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>
