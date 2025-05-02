// src/components/PokemonRow.tsx
'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  CardActionArea,
} from '@mui/material';

type PokemonRowProps = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

export const PokemonRow = ({ id, name, types, sprite }: PokemonRowProps) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: '#f5f5f5',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea sx={{ display: 'flex', alignItems: 'center', padding: 2, gap: 2 }}>
        <CardMedia
          component="img"
          image={sprite}
          alt={name}
          sx={{ width: 80, height: 80, objectFit: 'contain' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            #{id} {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Box mt={1}>
            {types.map((type) => (
              <Chip
                key={type}
                label={type}
                color="primary"
                variant="outlined"
                sx={{ mr: 1 }}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
