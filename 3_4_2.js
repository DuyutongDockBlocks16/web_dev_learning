const handleRequest = (request) => {

    const fixed_message = "You made a request with method ";

    let method_message = "GET";

    if (request.method !== "GET"){
        method_message = request.method;
    }

    const return_message = fixed_message + method_message;

    return new Response(return_message);
};

Deno.serve(handleRequest);