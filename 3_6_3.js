// http://localhost:8000?operation=sum&number1=8&number2=12

const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;

    if(params.has("number1") && params.has("number2") && params.has("operation")){

        const number1 = Number(params.get("number1"));
        const number2 = Number(params.get("number2"));

        if (params.get("operation") === "sum") {
            return new Response(`${number1 + number2}`);
        } else if (params.get("operation") === "product") {
            return new Response(`${number1 * number2}`);
        } else {
            return new Response(`Invalid parameters.`);
        }

    } else {
        return new Response(`Invalid parameters.`);
    }

};

Deno.serve(handleRequest);
