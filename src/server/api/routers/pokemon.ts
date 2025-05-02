import { db } from '@/server/db';
import { publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { z } from 'zod';

export const pokemonRouter = createTRPCRouter({
    getAll: publicProcedure.query(async () => {
        const pokemons = await db.pokemon.findMany({
          include: { types: true },
        });
      
        return pokemons.map(p => ({
          id: p.id,
          name: p.name,
          sprite: p.sprite,
          types: p.types.map(t => t.type),
        }));
      }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const pokemon = await db.pokemon.findUnique({
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
});
