'use client'
import React, { useState, useEffect } from 'react';
import { trpc } from '@/app/trpc/client';
import PokedexTable from '@/components/PokedexTable';
import { Pokemon } from '@/types/pokemon';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
import FilterablePokedexTable from '@/components/FilterablePokedexTable';

const Home = () => {
  const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [inputNames, setInputNames] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const availableTypes = ['Fire', 'Water', 'Grass', 'Electric', 'Bug', 'Poison']; // Static list

  const { data, isLoading, error } = trpc.pokemon.getManyByName.useQuery(inputNames, {
    enabled: inputNames.length > 0,
  });

  useEffect(() => {
    if (data) {
      const transformed = data.map((pokemon: { id: number; name: string; sprite: string; types: { type: string }[] }) => ({
        ...pokemon,
        types: pokemon.types.map((t: { type: string }) => t.type),
      }));
      setPokemonArray(transformed);
      setFilteredPokemon(transformed);
      
      console.log(transformed)// Set default view to all
    }
  }, [data]);

  useEffect(() => {
    if (selectedType) {
      const filtered = pokemonArray.filter(pokemon =>
        pokemon.types.includes(selectedType.toLowerCase())
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon(pokemonArray);
    }
  }, [selectedType, pokemonArray]);

  const handleTypeSelect = (type: string | undefined) => {
    setSelectedType(type?.toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const input = formData.get('pokemonNames') as string;
    const names = input.split(',').map(name => name.trim().toLowerCase());
    setInputNames(names);
    setSelectedType(undefined); // Reset filter
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom align="center">Pokédex</Typography>
      <Link href="/"><Typography variant="h6" gutterBottom align="right">Home</Typography></Link>

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

      {isLoading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box mt={4} textAlign="center">
          <Typography color="error" variant="h6">{`Error: ${error.message}`}</Typography>
        </Box>
      )}

      <PokedexTable  pokemonArray={filteredPokemon} />

      <div>
        <h1>Search Pokémon by Type</h1>
        <FilterablePokedexTable
          selectedType={selectedType}
          selectType={handleTypeSelect}
          availableTypes={availableTypes}
        />
      </div>
    </Box>
  );
};

export default Home;
