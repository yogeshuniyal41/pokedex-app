'use client';

import { useState } from "react";
import { api } from "@/utils/api";
import { PokemonRow } from "@/components/PokemonRow";
import {
  TextField,
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  CardActionArea,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPokemonPage() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const { data: pokemons = [], isLoading, isError } = api.pokemon.getAll.useQuery();
  const selected = pokemons.find(p => p.name.toLowerCase() === search.toLowerCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(name.trim());
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {/* Title */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, color: "#1976d2" }}>
        Search for a Pokémon
      </Typography>

      {/* Search Bar */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <TextField
          label="Pokémon Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ backgroundColor: "#f5f5f5" }}
        />
        <Tooltip title="Search Pokémon">
          <IconButton type="submit" color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Loading */}
      {isLoading && <CircularProgress sx={{ display: "block", margin: "0 auto" }} />}

      {/* Error */}
      {isError && (
        <Typography color="error" align="center" variant="body1">
          There was an error fetching Pokémon data. Please try again later.
        </Typography>
      )}

      {/* Result */}
      {selected ? (
        <Paper sx={{ p: 2, backgroundColor: "#f0f0f0", borderRadius: 2, boxShadow: 3, display: 'flex', justifyContent: 'center' }}>
          <PokemonRow {...selected} />
        </Paper>
      ) : (
        search && !isLoading && !isError && (
          <Typography color="text.secondary" align="center" variant="body1" sx={{ mt: 2 }}>
            😕 No Pokémon found with name "{search}"
          </Typography>
        )
      )}

      {/* Default view: show all Pokémon
      {!selected && !search && !isLoading && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" align="center" sx={{ color: "#1976d2", fontWeight: 500, mb: 2 }}>
            All Pokémon
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pokemons.slice(0, 8).map((pokemon) => (
              <Card
                key={pokemon.id}
                sx={{
                  width: 150,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "#f5f5f5",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={pokemon.sprite}
                    alt={pokemon.name}
                    sx={{ height: 120, objectFit: 'contain', padding: 1 }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6">
                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      #{pokemon.id}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      )} */}
    </Container>
  );
}
