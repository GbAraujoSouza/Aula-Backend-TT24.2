import { PrismaClient } from '@prisma/client';
import { userSeed } from './models/userSeed';

const prisma = new PrismaClient();

async function main() {
  // popular o banco de dados
  // await postSeed();
  await userSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
