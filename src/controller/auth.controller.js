import {
  createUser,
  deleteUser,
  getAll,
  getUserById,
  updateUser,
} from '../service/user.service.js';

export async function registerUser(req, res) {
  try {
    const data = await createUser(req.server.prisma);
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function loginUser(req, res) {
  try {
  } catch (error) {
    return error.message;
  }
}

export async function sendOtp(req, res) {
  try {
  } catch (error) {
    return error.message;
  }
}

export async function resetPassword(req, res) {
  try {
  } catch (error) {
    return error.message;
  }
}

export async function forgetPassword(req, res) {
  try {
  } catch (error) {
    return error.message;
  }
}

export async function getMe(req, res) {
  try {
  } catch (error) {
    return error.message;
  }
}
