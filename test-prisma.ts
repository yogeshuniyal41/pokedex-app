import { PrismaClient } from '';

const prisma = new PrismaClient();

async function main() {
  const pokemons = await prisma.pokemon.findMany();
  console.log(pokemons);
}

main()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
