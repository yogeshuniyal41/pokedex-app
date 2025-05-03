import { prisma } from '@/server/db'; // Make sure you import prisma
import { publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { z } from 'zod';

// Assuming Pokemon is the type that reflects the structure of the Pokemon object in your database


export const pokemonRouter = createTRPCRouter({
  // Fetch all pokemons with types
  getAll: publicProcedure.query(async () => {
    const pokemons = await prisma.pokemon.findMany({
      include: { types: true }, // Ensure types are included
    });

    return pokemons.map((p) => ({
      id: p.id,
      name: p.name,
      sprite: p.sprite,
      types: p.types.map((t) => t.type), // Mapping the types to an array of type names
    }));
  }),

  // Fetch a single pokemon by its ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { id: input.id },
        include: { types: true },
      });

      if (pokemon) {
        return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((type) => type.type), // Map the types to their names
          sprite: pokemon.sprite,
        };
      }

      throw new Error('Pokemon not found');
    }),

  // Fetch many pokemons by name
  getManyByName: publicProcedure
    .input(z.array(z.string())) // Array of names to search for
    .query(async ({ input }) => {
      return prisma.pokemon.findMany({
        where: {
          name: { in: input },
        },
        select: {
          id: true,
          name: true,
          types: { select: { type: true } },
          sprite: true,
        },
      });
    }),

  // Fetch a single pokemon by name
  getOneByName: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
        include: { types: true },
      });

      if (pokemon) {
        return {
          id: pokemon.id,
          name: pokemon.name,
          sprite: pokemon.sprite,
          types: pokemon.types.map((type) => type.type), // Extract types
        };
      }

      throw new Error('Pokemon not found');
    }),

  // Search for pokemons by a query string
  searchPokemon: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          name: {
            contains: input.query, // Case-insensitive search
            mode: 'insensitive',
          },
        },
        include: { types: true },
      });

      return pokemons.map((p) => ({
        id: p.id,
        name: p.name,
        sprite: p.sprite,
        types: p.types.map((t) => t.type),
      }));
    }),

  // Fetch pokemons by type
  getByType: publicProcedure
    .input(z.string().optional()) // Type string, but optional
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: input
          ? { types: { some: { type: input } } } // Search by types
          : undefined,
        include: { types: true },
      });

      return pokemons.map((p) => ({
        id: p.id,
        name: p.name,
        sprite: p.sprite,
        types: p.types.map((t) => t.type),
      }));
    }),
});
