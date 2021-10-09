import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Grid, Paper, Typography, Avatar } from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';

import { BookingRequest } from '../../interface/BookingRequest';

import useStyles from './useStyles';

const Booking = ({ start, end, status, sitterId }: BookingRequest): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(start);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(start);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(start);
  const startTime = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(start);
  const endTime = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(end);
  const time = `${day} ${month} ${year}, ${startTime}-${endTime}`;

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1} direction="row">
        <Grid container xs={8} direction="column" className={classes.leftColumn}>
          <Grid className={classes.timeGrid}>
            <Typography className={classes.timeLabel}>{time}</Typography>
          </Grid>
          <Grid container direction="row" className={`${classes.contactGrid} ${classes.secondLinePadding}`}>
            <Grid>
              <Avatar />
            </Grid>
            <Grid xs={1}></Grid>
            <Grid>
              <Typography className={classes.bookingSitterName}>{sitterId}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={4} direction="column" className={classes.rightColumn}>
          <Grid>
            <IconButton size="small" aria-controls="bookingSubmenu" aria-haspopup="true" onClick={handleClick}>
              <SettingsIcon fontSize="small" />
            </IconButton>
            <Menu id="bookingSubmenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Cancel</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Other action</MenuItem>
            </Menu>
          </Grid>
          <Grid container direction="row" className={`${classes.statusBar} ${classes.secondLinePadding}`}>
            <Grid item>
              <Typography className={classes.statusLabel}>{status}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Booking;
