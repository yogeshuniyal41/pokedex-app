import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return {
    name: data.name,
    sprite: data.sprites.front_default,
    types: data.types.map((t: any) => ({ type: t.type.name })),
  };
}

async function main() {
  for (let id = 1; id <= 20; id++) {
    const pokemon = await fetchPokemon(id);

    await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: {
          create: pokemon.types,
        },
      },
    });

    console.log(`✅ Inserted ${pokemon.name}`);
  }
}

main()
  .then(() => {
    console.log("🎉 All Pokémon inserted");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
