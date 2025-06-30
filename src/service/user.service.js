import { HashPass } from '../utils/index.js';

async function getUserByEmail(email, prisma) {
  try {
    const data = await prisma.users.findFirst({ where: { email } });
    if (!data) throw new Error('User not found');
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function registerUser(prisma, payload) {
  try {
    const { fullname, password, ...rest } = payload;
    const data = await getUserByEmail(payload.email, prisma);
    if (data != 'User not found' && data)
      throw new Error('User already exists');
    const newUser = await prisma.users.create({
      data: {
        ...rest,
        fullName: fullname,
        password: await HashPass(payload.password),
      },
    });
    return { id: newUser.id };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function loginUser(prisma, payload) {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//********************************************************************************************************************************************************************************/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//! &&&&&&&&&&& USER SERVICE
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//********************************************************************************************************************************************************************************/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/

export async function getAll(prisma) {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserById(prisma, id) {
  try {
    return await prisma.users.findFirst({ where: { id } });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUser(prisma, id, payload) {
  try {
    const data = await getUserById(prisma, id);
    if (!data) throw new Error('User not found');
    await prisma.users.update({
      where: { id },
      data: { payload, password: data?.password },
    });
    return { data: 'User successfully updated' };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUser(prisma, id) {
  try {
    const data = await getUserById(prisma, id);
    if (!data) throw new Error('User not found');
    await prisma.users.delete({ where: { id } });
    return { data: 'User successfully deleted' };
  } catch (error) {
    throw new Error(error.message);
  }
}
