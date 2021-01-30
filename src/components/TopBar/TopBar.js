import React from 'react';
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> history.goBack()}>
            Voltar
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            4FoodB
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
