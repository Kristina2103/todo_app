import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {Grid, AppBar, Toolbar,IconButton, Typography, Button} from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return <AppBar position="static" color="secondary">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title} >
              My ToDo List
              </Typography>
              <AddBoxIcon color="inherit"/>
              <LocalPizzaIcon color="inherit"/>
            </Toolbar>
          </AppBar>

};
