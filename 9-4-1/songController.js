// empty but can be used
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as songService from "./songService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const getAndRenderSongs = async (c) => {
    const data = {
        songs: await songService.listSongs(),
    };

    return c.html(
        eta.render("books.eta", data),
    );
};

const listSongs = async (c) => {
    return await getAndRenderSongs(c);
};

const addSongAndListSongs = async (c) => {
    const body = await c.req.parseBody();
    await songService.addSong(body);

    return c.redirect("/");
};

export { addSongAndListSongs, listSongs };