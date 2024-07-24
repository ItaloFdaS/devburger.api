/**
 * store => Cadastrar / Adicionar
 * index => listar vários
 * show => listar apenas um
 * update => atualizar
 * delete => deletar
 */

import { v4 } from "uuid";

import User from "../models/User.js";

import * as Yup from "yup";

class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password, admin } = request.body;

    const emailExists = await User.findOne({
      where: {
        email,
      },
    });

    if (emailExists) {
      return response.status(409).json({
        error: "Email already exists",
      });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return response.status(201).json({
      id: user.id,
      name,
      email,
    });
  }
}

export default new UserController();
