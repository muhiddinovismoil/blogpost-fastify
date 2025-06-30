import { HashPass } from '../utils/index.js';
export async function getAll(prisma) {
  try {
    const data = await prisma.users.findMany();
    return data;
  } catch (error) {}
}
export async function getUserById(prisma, id) {
  try {
  } catch (error) {}
}
export async function createUser(prisma, payload) {
  try {
    const data = await prisma.users.findFirst({
      where: {
        email: payload.email,
      },
    });
    if (data) throw new Error('User already exists');
    const newUser = await prisma.users.create({
      data: {
        ...payload,
        password: HashPass(payload.password),
      },
    });
    return { id: newUser.id };
  } catch (error) {}
}
export async function updateUser(prisma, id) {
  try {
  } catch (error) {}
}
export async function deleteUser(prisma, id) {
  try {
  } catch (error) {}
}
