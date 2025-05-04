import { prisma } from '@/server/db';
import { publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { z } from 'zod';

export const pokemonRouter = createTRPCRouter({
  // Fetch all Pokémon with types
  getAll: publicProcedure.query(async () => {
    const pokemons = await prisma.pokemon.findMany({
      include: { types: true },
    });

    return pokemons.map((p) => ({
      id: p.id,
      name: p.name,
      sprite: p.sprite,
      types: Array.isArray(p.types) ? p.types.map((t: { type: string }) => t.type) : [], // Corrected type extraction
    }));
  }),

  // Fetch a Pokémon by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { id: input.id },
        include: { types: true },
      });

      if (!pokemon) throw new Error(`Pokémon with ID ${input.id} not found`);

      return {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: Array.isArray(pokemon.types) ? pokemon.types.map((t: { type: string }) => t.type) : [],
      };
    }),

  // Fetch multiple Pokémon by name
  getManyByName: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          OR: input.map(name => ({
            name: { equals: name, mode: 'insensitive' }, // Ensures case-insensitive search
          })),
        },
        include: { types: true },
      });

      return pokemons.map((p) => ({
        id: p.id,
        name: p.name,
        sprite: p.sprite,
        types: Array.isArray(p.types) ? p.types.map((t: { type: string }) => t.type) : [],
      }));
    }),

  // Fetch a Pokémon by name
  getOneByName: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
        include: { types: true },
      });

      if (!pokemon) throw new Error(`Pokémon "${input}" not found`);

      return {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: Array.isArray(pokemon.types) ? pokemon.types.map((t: { type: string }) => t.type) : [],
      };
    }),

  // Search for Pokémon by query string
  searchPokemon: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          name: { contains: input.query, mode: 'insensitive' },
        },
        include: { types: true },
      });

      return pokemons.map((p) => ({
        id: p.id,
        name: p.name,
        sprite: p.sprite,
        types: Array.isArray(p.types) ? p.types.map((t: { type: string }) => t.type) : [],
      }));
    }),

  // Fetch Pokémon by type
  getByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: input ? { types: { some: { type: input } } } : {},
        include: { types: true },
      });

      return pokemons.map((p) => ({
        id: p.id,
        name: p.name,
        sprite: p.sprite,
        types: Array.isArray(p.types) ? p.types.map((t: { type: string }) => t.type) : [],
      }));
    }),
});