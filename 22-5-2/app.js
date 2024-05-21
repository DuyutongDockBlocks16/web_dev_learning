import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as pokeApi from "./pokeApiService.js";

const app = new Hono();

app.get("/pokemon-names/:id", async (c) => {
    const id = c.req.param("id");
    const name = await pokeApi.getPokemonName(id);
    return c.json({ name });
});

app.get("/pokemon-happiness/:id", async (c) => {
    const id = c.req.param("id");
    const happiness = await pokeApi.getPokemonBaseHappiness(id);
    return c.json({ happiness });
});

export default app;
