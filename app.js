exports.lambdaHandler = async (event) => {

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        body: 'Hello world'
    };
    return response;
};
