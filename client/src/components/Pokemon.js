import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { useSelector } from "react-redux";
import s from "../components/Pokemon.module.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  autocompleteClasses,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    backgroundColor: "#5c7aff",
  },
  card2: {
    maxWidth: 400,
    backgroundColor: "#caf0f8",
  },
  media: {
    height: 140,
    width: "60%",
    marginLeft: "0%",
  },
}));

export function Pokemon({ name, img, types, attack, id }) {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <Card
      className={darkMode ? classes.card : classes.card2}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            height="0"
            paddingTop="56,25%"
            image={img}
            alt="poke"
          />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {types}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <NavLink to={`pokemons/${id}`}>
          <Button variant="contained" size="small" color="primary">
            Details
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );

  // <div className={s.card}>
  // <Card>
  //   <NavLink to={`pokemons/${id}`} style={{ textDecoration: "none" }}>
  //     <h1 className={s.name}>{name}</h1>
  //     <img className="img" src={img} alt="img" />
  //     <p className={s.type}>{"Types: " + types}</p>
  //   </NavLink>
  // </Card>
  // </div>
}
export default Pokemon;
