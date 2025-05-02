'use client';
import { trpc } from '@/app/trpc/client';

export default function Pokedex() {
  const { data: pokemons, isLoading } = trpc.pokemon.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {pokemons?.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name} sssssssss   {pokemon.types}</div>
      ))}
    </div>
  );
}
