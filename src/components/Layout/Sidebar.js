import React from "react";
import {Projects} from '../Projects';
import { Grid, Typography} from '@material-ui/core';
//Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InboxIcon from '@material-ui/icons/Inbox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <InboxIcon />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <CalendarTodayIcon />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <DateRangeIcon />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>

    {/* Sidebar Middle */}
    <Grid container direction="column">
    
      <Typography variant="h4">
        <ExpandMoreIcon /> Projects
      </Typography>
     
      <Projects />
      
    </Grid>
  </div>
);
