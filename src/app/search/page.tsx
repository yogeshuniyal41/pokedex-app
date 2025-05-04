'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { trpc } from '@/app/trpc/client';
import PokedexTable from '@/components/PokedexTable';
import { Pokemon } from '@/types/pokemon';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
import FilterablePokedexTable from '@/components/FilterablePokedexTable';

const Home = () => {
  const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([]);
  const [inputNames, setInputNames] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const availableTypes = ['Fire', 'Water', 'Grass', 'Electric', 'Bug', 'Poison']; // Static list

  const { data, isLoading, error } = trpc.pokemon.getManyByName.useQuery(inputNames, {
    enabled: inputNames.length > 0 && inputNames.some(name => name.trim().length > 0),
     // Prevents empty search requests
  });

  useEffect(() => {
    if (data) {
      const transformed = data.map((pokemon: { id: number; name: string; sprite: string; types?: string[] }) => ({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: Array.isArray(pokemon.types) ? pokemon.types : [], // Use the types array directly
      }));
      
      setPokemonArray(transformed);
      console.log('Fetched and Transformed Pokémon:', transformed); // Check the transformed result
    }
  }, [data]);

  // Optimized filtering using useMemo
  const filteredPokemon = useMemo(() => {
    if (!selectedType) return pokemonArray;
    const typeToMatch = selectedType.toLowerCase(); // normalize
    return pokemonArray.filter(pokemon =>
      pokemon.types?.some(type => type.toLowerCase() === typeToMatch)
    );
  }, [selectedType, pokemonArray]);
  
  // Handle type selection
  const handleTypeSelect = (type?: string) => {
    setSelectedType(type ?? undefined); // Ensure proper reset
  };

  // Handle search input
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input = formData.get('pokemonNames') as string;
    const names = input.split(',').map(name => name.trim().toLowerCase());

    setInputNames(names);
    setSelectedType(undefined); // Reset filter when searching by name
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom align="center">Pokédex</Typography>
      <Link href="/"><Typography variant="h6" gutterBottom align="right">Home</Typography></Link>

      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <TextField
            name="pokemonNames"
            label="Enter Pokémon names (comma separated)"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: '600px' }}
          />
          <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
            Search
          </Button>
        </Box>
      </form>

      {/* Loading Indicator */}
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {/* Error Handling - Only Shows After Search */}
      {error && inputNames.length > 0 && (
        <Box mt={4} textAlign="center">
          <Typography color="error" variant="h6">{`Error: ${error.message}`}</Typography>
        </Box>
      )}
<Box mt={4}>
        
        <FilterablePokedexTable
          selectedType={selectedType}
          selectType={handleTypeSelect}
          availableTypes={availableTypes}
        />
      </Box>
      {/* Pokémon Table */}
      {filteredPokemon.length > 0 ? (
        <PokedexTable pokemonArray={filteredPokemon} />
      ) : (
        !isLoading && inputNames.length > 0 && (
          <Typography color="error" variant="h6" align="center">
            No Pokémon found. Try another search!
          </Typography>
        )
      )}

     
      
    </Box>
  );
};

export default Home;
