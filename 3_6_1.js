const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;

    return new Response(`${params.get("page")} ${params.get("count")}`);
};

Deno.serve(handleRequest);
