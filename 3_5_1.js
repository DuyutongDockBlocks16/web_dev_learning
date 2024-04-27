const handleRequest = (request) => {

    const url = new URL(request.url);

    return new Response(`${request.method} request made to path ${url.pathname}`);
};

Deno.serve(handleRequest);
