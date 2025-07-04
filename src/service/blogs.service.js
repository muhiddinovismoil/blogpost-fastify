export async function getAll(prisma) {
    try {
        const data = await prisma.blogs.findMany();
        return data.length == 0 ? [] : data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function getById(prisma, id) {
    try {
        const data = await prisma.blogs.findFirst({
            where: { id },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function createBlogs(prisma, payload) {
    try {
        const data = await prisma.blogs.create({
            data: {
                ...payload,
            },
        });
        return data.id;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function updateBlogs(prisma, id, payload) {
    try {
        const data = await getById(id);
        if (!data) throw new Error('Blog not found');
        await prisma.blogs.update({
            where: { id },
            data: { ...payload },
        });
        return 'Blog updated successfully';
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteBlogs(prisma, id) {
    try {
        const data = await getById(id);
        if (!data) throw new Error('Blog not found');
        await prisma.blogs.delete({
            where: { id },
        });
        return 'User deleted successfully';
    } catch (error) {
        throw new Error(error.message);
    }
}
