import React from "react";
import {Grid, AppBar, Toolbar,IconButton, Typography, Button} from '@material-ui/core';
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
    <div className="sidebar__middle">
    
        <Typography variant="h4">
          <ExpandMoreIcon /> Projects
        </Typography>
     
      {/* Projects */}
      <ul className="sidebar__projects">
        <li>
          <span>Projects here...</span>
        </li>
      </ul>
    </div>
  </div>
);
