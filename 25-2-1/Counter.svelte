<script>
    let count = 0;
    function increment() {
        count += 1;
    }
    function reset() {
        count = 0;
    }
</script>

<h1>Count: {count}</h1>

{#if count === 1}
    <p>Click, clickiti click click click.</p>
{/if}
{#if count === 5}
    <p>I know I'll get tired of these clicking exercises.</p>
{/if}

<button on:click={increment}>Increment</button>
<button on:click={reset}>Reset</button>
