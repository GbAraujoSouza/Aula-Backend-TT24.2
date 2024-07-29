import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

interface User {
  nome: string;
  email: string;
  premium: boolean;
}

const data: User[] = [];

export async function userSeed() {
  // criar 100 entradas no banco de dados
  for (let i = 0; i < 100; i++) {
    data.push({
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      premium: Math.round(Math.random()) ? true : false
    })

  }
  await prisma.user.createMany({data})
}
