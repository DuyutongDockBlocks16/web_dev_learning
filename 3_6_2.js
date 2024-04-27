const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;

    let title = "";
    if (params.has("title")) {
        title = params.get("title");
    } else {
        title = "princess";
    }

    let name = "";
    if (params.has("name")) {
        name = params.get("name");
    } else {
        name = "Tove";
    }

    return new Response(`Once upon a time, there was a ${title} called ${name}.`);
};

Deno.serve(handleRequest);
