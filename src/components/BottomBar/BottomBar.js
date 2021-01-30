import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from "./styled";
import { goToProfile, goToCart, goToFeed } from "../../routes/Coordinator";

export const BottomBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar} >
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={()=> goToFeed(history)}>
            Home
          </IconButton>

          <IconButton color="inherit" onClick={()=> goToCart(history)}>
          Carrinho
          </IconButton>

          <IconButton edge="end" color="inherit" onClick={()=> goToProfile(history)}>
            Perfil
          </IconButton>
      
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
