export async function authMiddleware(request, reply) {
    try {
        let authHeader = request.headers.authorization;
        if (authHeader && !authHeader.startsWith('Bearer ')) {
            authHeader = 'Bearer ' + authHeader;
            request.headers.authorization = authHeader;
        }
        await request.jwtVerify();
    } catch (err) {
        return reply
            .status(401)
            .send({ statusCode: 401, message: 'Unauthorized' });
    }
}
