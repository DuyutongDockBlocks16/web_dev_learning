// Assuming that the required imports and utilities for making HTTP requests are available,
// such as fetch from a polyfill or a global environment (like Deno or Node with a polyfill).

const getPokemonName = async (id) => {
    // Construct the URL to fetch data from the PokéAPI
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try {
        // Perform the fetch request
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the PokéAPI');
        }

        // Parse the JSON response
        const data = await response.json();

        // Return the Pokémon's name
        return data.name;
    } catch (error) {
        // Handle any errors that might occur during the fetch operation
        console.error("Error fetching Pokémon data:", error);
        throw error; // Rethrow the error so that the caller knows something went wrong
    }
};

export { getPokemonName };
