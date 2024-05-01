import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get(
    "/restaurants", (c) => {
        return c.text("Listing restaurants.");
    },
);

app.get(
    "/restaurants/:id", (c) => {
        const restaurant_id = c.req.param("id");
        return c.text(`Showing restaurant with id ${restaurant_id}.`);
    },
);

app.get(
    "/restaurants/:id/reviews", (c) => {
        const restaurant_id = c.req.param("id");
        return c.text(`Listing reviews for restaurant with id ${restaurant_id}.`);
    },
);

app.post(
    "/restaurants", (c) => {
        return c.text(`Adding a restaurant.`);
    }
)

app.post(
    "/restaurants/:id/reviews", (c) => {
        const restaurant_id = c.req.param("id");
        return c.text(`Adding a review for restaurant with id ${restaurant_id}.`);
    }
)

app.delete(
    "/restaurants/:id/reviews/:rid", (c) => {
        const restaurant_id = c.req.param("id");
        const reviews_id = c.req.param("rid");
        return c.text(`Removing review ${reviews_id} from restaurant with id ${restaurant_id}.`);
    }
)

export default app;
