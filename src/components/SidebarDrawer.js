import React, {useState} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {Header} from './Layout/Header';
//Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {Projects} from './Projects';
import {AddProject} from './AddProject';
import { useSelectedProjectValue } from '../context';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const SidebarDrawer = (props) => {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {selectedProject, setSelectedProject} = useSelectedProjectValue();
  const [active, setActive] = useState(selectedProject);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const onCollatedTaskClick = key => {
  setSelectedProject(key);
  setActive(key)
}
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {/* Collated Projects */}
        <List>
            <ListItem 
             button 
             onClick={() =>onCollatedTaskClick('INBOX')}
             style={{background: active === 'INBOX' ? 'rgba(0, 0, 0, 0.04)' : '#fff'}}  >
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem 
              style={{background: active === 'TODAY' ? 'rgba(0, 0, 0, 0.04)' : '#fff'}} 
              button 
              onClick={() =>onCollatedTaskClick('TODAY')} >
              <ListItemIcon><CalendarTodayIcon/></ListItemIcon>
              <ListItemText primary="Today" />
            </ListItem>
            <ListItem 
              style={{background: active === 'NEXT_7' ? 'rgba(0, 0, 0, 0.04)' : '#fff'}} 
              button 
              onClick={() =>onCollatedTaskClick('NEXT_7')} >
              <ListItemIcon><DateRangeIcon/></ListItemIcon>
              <ListItemText primary="Next 7 days" />
            </ListItem>
        </List>
      <Divider />
      <Grid container direction="row" alignContent="center">
        
        <ListItem button >
              <ListItemIcon><ExpandMoreIcon/></ListItemIcon>
              <ListItemText primary="Projects" />
        </ListItem>
      </Grid>
        {/* Projects */}
        <Projects />
        {/* Add Project */}
        <AddProject />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

