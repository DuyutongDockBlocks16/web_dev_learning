<script>
    let count = $state(0);
</script>

<h1>Count: {count}</h1>
<button on:click={() => count += 1}>Increment</button>
<button on:click={() => count -= 1}>Decrement</button>