import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostController {
  public async create(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuario nao encontrado" });
      }

      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          user: {
            connect: { id: Number(id) },
          },
        },
        include:{
          user: true,
        }
      });

      return res
        .status(201)
        .json({ message: "post criado com sucesso", post: newPost });
    } catch (error) {
      return res.status(500).json({ message: "erro no servidor", error: error});
    }
  }
}

export const postController = new PostController();
