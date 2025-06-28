import { AuthService } from '../../services/index.js';

const authService = new AuthService();

export async function registerUser(req, res) {
  try {
    const data = await authService.signup(req.server.prisma, req.body);
    if (data.statusCode == 400) {
      return res.status(data.statusCode).send(data);
    }
    res.status(data.statusCode).send(data);
  } catch (error) {
    return error.message;
  }
}

export async function loginUser(req, res) {
  try {
    const data = await authService.signin(req.server.prisma, req.body);
  } catch (error) {
    return error.message;
  }
}
