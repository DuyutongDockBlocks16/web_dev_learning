const handleRequest = (request) => {
    const url = new URL(request.url) ;
    const path = url.pathname;

    return new Response("You requested the path "+path);
};

Deno.serve(handleRequest);
