import API from "./../config/pokeApi";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const PokeCard = (props) => {
  const { idPokemon } = props;
  const [name, setName] = React.useState({});
<<<<<<< HEAD
  const [expanded, setExpanded] = React.useState(false);
  const [imagePokemon, setImagePokemon] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getPokemon = async () => {
    
    const responsePokemon = await API.get(`${idPokemon}`);
=======
  const [imagePokemon, setImagePokemon] = React.useState("");

  const getPokemon = async () => {
    const responsePokemon = await API.get(`/${idPokemon}`);
>>>>>>> 7db0df08d9c289467581544b5006818beecf9b19
    const { data } = responsePokemon;
    const { name: pokemonName, sprites } = data;
    const { front_default } = sprites;
    setName(pokemonName);
    setImagePokemon(front_default);
    console.log(sprites);
  };
  React.useEffect(() => {
    getPokemon();
  }, [idPokemon]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imagePokemon}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
