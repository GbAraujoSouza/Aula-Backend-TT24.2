import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserController {
  public static async create(request: Request, response: Response) {
    const { nome, email } = request.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          nome,
          email,
        },
        select: {
          email: true,
          nome: false
        }
      });

      return response.status(201).json({
        message: "Usuario criado com sucesso",
        user: newUser,
      });
    } catch (error) {
      return response.status(500).json({
        messageError: "Erro interno no servidor",
      });
    }
  }

  public static async readAll(request: Request, response: Response) {
    try {
      const users = await prisma.user.findMany();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
      
    }
  }

}
