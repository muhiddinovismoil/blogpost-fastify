export async function authMiddleware(request, reply) {
    try {
        await request.jwtVerify();
    } catch (err) {
        return reply
            .status(401)
            .send({ statusCode: 401, message: 'Unauthorized' });
    }
}
