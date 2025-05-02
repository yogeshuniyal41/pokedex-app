"use client";

import React, { useState, useEffect } from 'react';
import { trpc } from '@/app/trpc/client'; 
import PokedexTable from '@/components/PokedexTable'; 
import { Pokemon } from '@/types/pokemon';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';

const Home = () => {
 
  const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([]);
  const [inputNames, setInputNames] = useState<string[]>([]);
  const { data, isLoading, error } = trpc.pokemon.getManyByName.useQuery(inputNames, {
    enabled: inputNames.length > 0, 
  });

  useEffect(() => {
    if (data) {
      const transformed = data.map(pokemon => ({
        ...pokemon,
        types: pokemon.types.map(t => t.type), 
      }));
      setPokemonArray(transformed);
    }
  }, [data]);
  

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const input = formData.get('pokemonNames') as string;
    const names = input.split(',').map(name => name.trim().toLowerCase()); // Split by commas and normalize
    setInputNames(names); // Update the state with the names array
  };
 
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom align="center">Pokédex</Typography>
      <Link href={'/'}><Typography variant="h6" gutterBottom align="right">Home</Typography></Link>
      {/* Step 3: Form for inputting Pokémon names */}
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <TextField
            name="pokemonNames"
            label="Enter Pokémon names (comma separated)"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: '600px' }}
          />
         
          <Button type="submit" variant="contained"  sx={{ marginTop: 2 }}>
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

      
      <PokedexTable pokemonArray={pokemonArray} />
    </Box>
  );
};

export default Home;
