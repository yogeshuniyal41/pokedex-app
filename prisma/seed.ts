import { PrismaClient } from "./prisma/generated/client";
const prisma = new PrismaClient();

// ✅ Fetch Pokémon Data Safely
async function fetchPokemon(id: number): Promise<{ name: string; sprite: string; types: { type: string }[] }> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch Pokémon with ID ${id}`);

    const data = await res.json();

    return {
      name: data.name,
      sprite: data.sprites.front_default,
      types: Array.isArray(data.types) && data.types.length
        ? data.types.map((t: { type: { name: string } }) => ({ type: t.type.name }))
        : [{ type: "Unknown" }], // 🛠 Ensuring no empty types
    };
  } catch (error) {
    console.error(`❌ Error fetching Pokémon ${id}:`, error);
    return { name: "Unknown", sprite: "", types: [{ type: "Unknown" }] }; // 🚨 Handle API failures gracefully
  }
}

// ✅ Insert Pokémon Data into Database
async function main() {
  for (let id = 1; id <= 20; id++) {
    const pokemon = await fetchPokemon(id);
    if (pokemon.name === "Unknown") continue; // 🚨 Skip failed fetches

    await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        sprite: pokemon.sprite || "https://via.placeholder.com/100", // 🛠 Add default image if missing
        types: {
          create: pokemon.types.length ? pokemon.types : [{ type: "Unknown" }], // Prevents `undefined` issue
        },
      },
    });

    console.log(`✅ Inserted ${pokemon.name}`);
  }
}

// ✅ Run Seed Script with Error Handling
main()
  .then(() => {
    console.log("🎉 All Pokémon inserted successfully!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    prisma.$disconnect();
  });