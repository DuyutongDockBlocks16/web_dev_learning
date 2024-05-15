let requestCount = 0; // Variable to keep track of request counts

const accessControlMiddleware = async (c, next) => {
    const authenticated = c.user;
    if (!authenticated) {
        return c.text("You have not authenticated!", 401);
    }
    await next();
};

const addUserToContextMiddleware = async (c, next) => {
    // Placeholder user data, for example purposes only
    c.user = { name: "Sample User", id: 123 };
    await next();
};

const errorMiddleware = async (c, next) => {
    try {
        await next();
    } catch (e) {
        console.error(e);
        return c.text("An error occurred!", 500);
    }
};

const loggerMiddleware = async (c, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${c.req.method} ${c.req.path} - ${ms}ms`);
};

const requestCountingMiddleware = async (c, next) => {
    // Increment count for all requests except GET to /x-request-count
    if (!(c.req.method === 'GET' && c.req.path === '/x-request-count')) {
        requestCount++;
    }

    // Special handling for GET request to /x-request-count
    if (c.req.method === 'GET' && c.req.path === '/x-request-count') {
        return c.text(requestCount.toString());
    }

    await next();
};

export {
    accessControlMiddleware,
    addUserToContextMiddleware,
    errorMiddleware,
    loggerMiddleware,
    requestCountingMiddleware
};
