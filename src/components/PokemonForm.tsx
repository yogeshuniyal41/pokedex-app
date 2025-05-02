// src/components/PokemonForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface PokemonFormProps {
  onSubmit: (names: string[]) => void;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>(''); // State for input text

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Convert input text into an array of Pokémon names
    const names = input.split(',').map((name) => name.trim()).filter((name) => name !== '');
    onSubmit(names); // Pass names array to the parent component
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center" mb={2}>
      <TextField
        label="Enter Pokémon Names"
        variant="outlined"
        value={input}
        onChange={handleInputChange}
        fullWidth
        helperText="Separate names with commas"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Fetch Pokémon
      </Button>
    </Box>
  );
};

export default PokemonForm;
