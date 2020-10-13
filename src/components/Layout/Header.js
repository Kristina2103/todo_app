import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Grid, AppBar, Toolbar,IconButton, Typography} from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

export const Header = ({handleDrawerToggle, drawerWidth}) => {

  const useStyles = makeStyles((theme) => ({
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
  }));

  const classes = useStyles();
  return  <AppBar position="fixed" className={classes.appBar} color="secondary">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Grid container justify="space-between">
      <Typography variant="h6" noWrap>
        My ToDo List
      </Typography>
      <Grid item>
        <AddBoxIcon color="inherit"/>
          <LocalPizzaIcon color="inherit"/>
      </Grid>
        </Grid>
    </Toolbar>
  </AppBar>

};
