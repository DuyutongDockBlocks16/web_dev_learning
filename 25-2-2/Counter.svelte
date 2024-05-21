<script>
    let count = 0;
    let joke = null;

    const fetchJoke = async () => {
        const response = await fetch("https://simple-joke-api.deno.dev/random");
        joke = await response.json(); // Save the joke to the reactive variable
    };

    // Function to increment the count
    const increment = () => {
        count++;
        if (count === 1) {
            fetchJoke(); // Fetch a new joke only when count is 1
        }
    };

    // Function to reset the count and clear the joke
    const reset = () => {
        count = 0;
        joke = null;
    };
</script>

<h1>Count: {count}</h1>

<button on:click={increment}>Increment</button>
<button on:click={reset}>Reset</button>

{#if count === 1 && joke}
    <p>{joke.setup}</p>
    <p>{joke.punchline}</p>
{:else if count === 5}
    <p>I know I'll get tired of these clicking exercises.</p>
{/if}
