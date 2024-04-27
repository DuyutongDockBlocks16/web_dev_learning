const handleRequest = (request) => {

    const url = new URL(request.url)

    const pathname = url.pathname;

    if (request.method === 'PEEK' && pathname === '/secret' ){
        const url = new URL(request.url);

        const processed_pathname = pathname.slice(1,);

        return new Response(`Peeking at ${processed_pathname} data...`);

    }



    return new Response(`There is nothing to see here...`);
};

Deno.serve(handleRequest);