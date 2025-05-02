'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { api } from '@/utils/api';
import PokemonCard from '@/components/PokemonCard';

export default function Home() {
  const { data: pokemons, isLoading } = api.pokemon.getAll.useQuery();

  return (
    <Box sx={{ padding: 3 }}>
      <div className='flex gap-8  justify-around'>
      <Typography variant="h2" gutterBottom>
        All Pokémon
      </Typography>
      <Link href={'/search'} ><Typography sx={{display:'inline-block'}} variant="h6" gutterBottom>
       Search Pokemon
      </Typography>
      </Link>
      </div>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          background: 'transparent',
          padding: 2,
        }}
      >
        {!isLoading &&
          pokemons?.map((poke) => (
            <Link key={poke.id} href={`/pokemon/${poke.name}`} passHref>
              <Box
                sx={{
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <PokemonCard
                  name={poke.name}
                  sprite={poke.sprite}
                  types={poke.types}
                />
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
}
