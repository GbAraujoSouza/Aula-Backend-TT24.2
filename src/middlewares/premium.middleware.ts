import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PremiumMiddleware {
  public static async checkPremium(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      
      const user = await prisma.user.findUnique({
        where: { id: Number(id) }
      })

      if (!user) {
        return response.status(404).json({ erro: "usuario nao encontrado"})
      }

      if (!user.premium){
        return response.status(401).json({ erro: "acesso negado"})
      }

      next();
    } catch (error) {
      return response.status(500).json({ message: "erro no servidor", error: error})
    }
  }
}
