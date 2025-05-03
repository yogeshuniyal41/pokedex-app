import { prisma } from '@/server/db'; // Make sure you import prisma
import { publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { z } from 'zod';


export const pokemonRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const pokemons = await prisma.pokemon.findMany({
      include: { types: true },
    });

    return pokemons.map((p) => ({
      id: p.id,
      name: p.name,
      sprite: p.sprite,
      types: p.types.map((t) => t.type),
    }));
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { id: input.id },
        include: {
          types: true, // Include the types of the specific Pokemon
        },
      });

      if (pokemon) {
        return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((type) => type.type), // Extract the type names
          sprite: pokemon.sprite,
        };
      }

      throw new Error('Pokemon not found');
    }),

  getManyByName: publicProcedure
    .input(z.array(z.string())) // Expecting an array of names
    .query(async ({ input }) => {
      return prisma.pokemon.findMany({
        where: {
          name: {
            in: input, // Filter by names passed in input array
          },
        },
        select: {
          id: true,
          name: true,
          types: {
            select: {
              type: true, // Select the 'type' from the PokemonType table
            },
          },
          sprite: true,
        },
      });
    }),

  getOneByName: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
        include: {
          types: true,  // Include the types of the Pokémon
        },
      });
  
      if (pokemon) {
        return {
          id: pokemon.id,
          name: pokemon.name,
          sprite: pokemon.sprite,
          types: pokemon.types.map((type) => type.type), // Extract the types
        };
      }
  
      throw new Error('Pokemon not found');
    }),

    searchPokemon: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          name: {
            contains: input.query,
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
  
  getByType: publicProcedure
  .input(z.string().optional())
  .query(async ({ input }) => {
    const pokemons = await prisma.pokemon.findMany({
      where: input
        ? {
            types: {
              some: {
                type: input,
              },
            },
          }
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

