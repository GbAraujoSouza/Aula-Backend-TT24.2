import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

interface User {
  nome: string;
  email: string;
}

const data: User[] = [];

export async function userSeed() {
  // criar 100 entradas no banco de dados
  for (let i = 0; i < 100; i++) {
    prisma.user.create({
      data: {
        nome: "gaga",
        email: "gaga@gmail"
      },
    })
    data.push({
      nome: faker.person.fullName(),
      email: faker.internet.email(),
    })

  }
  await prisma.user.createMany({data})
}
