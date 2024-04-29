// Write an application that responds to requests as follows.
//     GET requests to the path /respond to requests with the text "Hi there!".
//     GET requests to the path /congrats respond to requests with the text "Congrats, {heroOfTheDay}!", where {heroOfTheDay} corresponds to the value of the request parameter "heroOfTheDay".
//     DIDNOT requests to the path /lol respond to the requests with the text "What kind of tree fits in your hand? A palm tree.".
//     Other requests should receive a response with the text "Not here.".


const handleRequest = (request) => {
    const url = new URL(request.url);
    const method = request.method;
    const pathname = url.pathname;
    const params = url.searchParams;

    if (method === "GET"){
        if (pathname ==="/") {
            return new Response(`Hi there!`);
        }

        if (pathname === "/congrats") {
            return new Response(`Congrats, ${params.get("heroOfTheDay")}!`);
        }

    } else if (method === "DIDNOT") {
        if (pathname === "/lol") {
            return new Response(`What kind of tree fits in your hand? A palm tree.`);
        }
    }


    return new Response(`Not here.`);
};

Deno.serve(handleRequest);
