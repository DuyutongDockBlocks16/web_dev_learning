const fetchRandomJoke = async () => {


    const response = await fetch("https://simple-joke-api.deno.dev/random", {
        method: "GET",
    });


    return await response.json();

};

export { fetchRandomJoke };
