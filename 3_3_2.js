const handleRequest = (request) => {
    const url = new URL(request.url);

    let message = "pong"

    if (url.pathname === "/one") {
        message = "yksi";
    } else if (url.pathname === "/two") {
        message = "kaksi";
    }

    return new Response(message);
};

Deno.serve(handleRequest);