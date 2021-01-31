import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import anterior from "../../img/anterior.png"
import GlobalStateContext from "../../global/GlobalStateContext";


export const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const {states} = useContext(GlobalStateContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> history.goBack()}>
            <img height="15rem" src={anterior} alt="Back"></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {states.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
