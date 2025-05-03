// src/components/PokedexTable.tsx

import { FC } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Chip, Avatar } from '@mui/material';
import { Pokemon } from '@/types/pokemon'; // Ensure the correct Pokemon type is used.

interface PokedexTableProps {
  pokemonArray: Pokemon[];
}

const PokedexTable: FC<PokedexTableProps> = ({ pokemonArray }) => {
  return (
    <TableContainer style={{background:'transparent', fontWeight:'bold'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Pokédex Table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Types</strong></TableCell>
            <TableCell><strong>Sprite</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => (
            <TableRow key={pokemon.id} hover>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>
                {pokemon.types.map((type) => (
                  <Chip key={type} label={type} color="primary" style={{ marginRight: 4 }} />
                ))}
              </TableCell>
              <TableCell>
                <Avatar style={{height:'30%' , width:'30%'}} src={pokemon.sprite} alt={pokemon.name} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;
