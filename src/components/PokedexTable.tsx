import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Pokemon } from '@/types/pokemon';

interface PokedexTableProps {
  pokemonArray: Pokemon[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => {
  return (
    <TableContainer component="div" sx={{ maxWidth: '100%', marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>Images</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell>
                <Typography variant="body1">{pokemon.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{pokemon.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{pokemon.types.join(', ')}</Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: 80, // default size
                    height: 80, // default size
                    borderRadius: '50%',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover img': {
                      transform: 'scale(2)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;
