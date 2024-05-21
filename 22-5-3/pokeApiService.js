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

const getPokemonBaseHappiness = async (id) => {
    // Construct the URL for the Pokémon species endpoint
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    try {
        // Perform the fetch request
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the PokéAPI');
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract and return the base happiness
        return data.base_happiness;
    } catch (error) {
        // Handle any errors that might occur during the fetch operation
        console.error("Error fetching Pokémon species data:", error);
        throw error; // Rethrow the error so that the caller knows something went wrong
    }
};

const getPokemonEvolutionChain = async (id) => {
    // Construct the URL for the Pokémon evolution chain endpoint
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;

    try {
        // Perform the fetch request
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the PokéAPI');
        }

        // Parse the JSON response
        const data = await response.json();

        // Prepare to extract names from the evolution chain
        let evolutionChain = [];
        let currentStage = data.chain;

        // Iterate over the evolution chain to extract names
        while (currentStage) {
            // Push the current Pokémon's name to the chain array
            evolutionChain.push(currentStage.species.name);

            // Move to the next stage in the chain
            if (currentStage.evolves_to.length > 0) {
                currentStage = currentStage.evolves_to[0];
            } else {
                currentStage = null; // No more evolutions, break the loop
            }
        }

        return evolutionChain;
    } catch (error) {
        // Handle any errors that might occur during the fetch operation
        console.error("Error fetching Pokémon evolution data:", error);
        throw error; // Rethrow the error so that the caller knows something went wrong
    }
};

export { getPokemonBaseHappiness, getPokemonEvolutionChain, getPokemonName };
