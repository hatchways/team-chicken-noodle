import React, { useState } from 'react';
import { Menu, MenuItem, Button, Grid, Paper, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { IRequest } from './IRequest';

const useStyles = makeStyles(() => ({
  root: {
    padding: 5,
    margin: 3,
    borderColor: 'grey',
  },
  leftColumn: {
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  rightColumn: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  settingsButton: {},
  contactGrid: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusBar: {
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const Booking = ({ start, end, status, sitterId }: IRequest): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(start);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(start);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(start);
  const startTime = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(start);
  const endTime = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(end);
  const time = `${da} ${mo} ${ye}, ${startTime}-${endTime}`;

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1} direction="row">
        <Grid container xs={8} direction="column" className={classes.leftColumn}>
          <Grid>
            <Typography>{time}</Typography>
          </Grid>
          <Grid container direction="row" spacing={1} className={classes.contactGrid}>
            <Grid item>
              <AccountCircleIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography>{sitterId}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={4} direction="column" className={classes.rightColumn}>
          <Grid>
            <Button
              className={classes.settingsButton}
              size="small"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SettingsIcon fontSize="small" />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Cancel</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Other action</MenuItem>
            </Menu>
          </Grid>
          <Grid container direction="row" className={classes.statusBar}>
            <Grid xs={6}>
              <Typography>{status}</Typography>
            </Grid>
            <Grid xs={6}>
              <Button color="secondary">Checkout</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Booking;
