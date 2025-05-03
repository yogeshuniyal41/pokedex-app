import React from 'react';
import { Button, Box } from '@mui/material';

export interface PokemonTypeSelectionProps {
  onTypeSelect: (type: string | undefined) => void;
  availableTypes: string[];
  selectedType?: string;
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  onTypeSelect,
  availableTypes,
  selectedType,
}) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center" mb={3}>
      {availableTypes.map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "contained" : "outlined"}
          onClick={() => onTypeSelect(type)}
        >
          {type}
        </Button>
      ))}
    </Box>
  );
};

export default PokemonTypeSelection;
