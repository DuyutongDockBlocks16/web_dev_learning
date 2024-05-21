<script>
    let joke = ''; // This will store the joke received from the API

    // Function to fetch a random joke from the Joke API
    const fetchJoke = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const jsonData = await response.json();

        // Check if the joke is a single part or two part
        if (jsonData.type === 'single') {
            joke = jsonData.joke;
        } else {
            joke = jsonData.setup + ' ... ' + jsonData.delivery;
        }
    };
</script>

<!-- Button to trigger the API query -->
<button on:click={fetchJoke}>Query API</button>

<!-- Display the joke -->
<p>Joke: {joke}</p>

