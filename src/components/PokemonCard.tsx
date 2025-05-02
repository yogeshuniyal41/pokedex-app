import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type PokemonCardProps = {
  id?: number; // Optional, in case some pages don't pass it
  name: string;
  sprite: string;
  types: string[];
};

const PokemonCard = ({ id, name, sprite, types }: PokemonCardProps) => {
  return (
    <Card sx={{ width: 200, background: 'transparent', '&:hover': { transform: 'scale(1.1)', transition: '0.3s ease' } }}>
      <CardMedia component="img" image={sprite} alt={name} sx={{ height: 140 }} />
      <CardContent>
        {id !== undefined && (
          <Typography variant="body2" color="textSecondary">
            #{id}
          </Typography>
        )}
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {types.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
