import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Grid, Box, Typography, Avatar, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import SettingsIcon from '@material-ui/icons/Settings';

import { BookingRequest } from '../../interface/BookingRequest';

import { requestUpdate } from '../../helpers/APICalls/request';

import useStyles from './useStyles';

const Booking = ({ _id, start, end, status, sitterId, isNextBooking }: BookingRequest): JSX.Element => {
  const classes = useStyles({ isNextBooking });

  const [currentStatus, setCurrentStatus] = useState<string>(status);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccept = async () => {
    setAnchorEl(null);
    const result = await requestUpdate(_id, 'accepted');
    const { request } = result;
    if (request.status) {
      setCurrentStatus(request.status);
    }
  };
  const handleDecline = async () => {
    setAnchorEl(null);
    const result = await requestUpdate(_id, 'declined');
    const { request } = result;
    if (request.status) {
      setCurrentStatus(request.status);
    }
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
    <Box boxShadow={2} className={classes.root}>
      <Grid container spacing={1} direction="row">
        <Grid container xs={9} direction="column" className={classes.leftColumn}>
          <Grid className={classes.timeGrid}>
            <Typography className={classes.timeLabel}>{time}</Typography>
          </Grid>
          <Grid container direction="row" className={`${classes.contactGrid} ${classes.secondLinePadding}`}>
            <Grid>
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid xs={1}></Grid>
            <Grid>
              <Typography className={classes.bookingSitterName}>{sitterId}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={3} direction="column" className={classes.rightColumn}>
          <Grid>
            <IconButton size="small" aria-controls="booking-sub-menu" aria-haspopup="true" onClick={handleClick}>
              <SettingsIcon fontSize={isNextBooking ? 'default' : 'small'} />
            </IconButton>
            <Menu id="booking-sub-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleAccept}>Accept</MenuItem>
              <MenuItem onClick={handleDecline}>Decline</MenuItem>
              <MenuItem onClick={handleClose}>Other action</MenuItem>
            </Menu>
          </Grid>
          <Grid container direction="row" className={`${classes.statusBar} ${classes.secondLinePadding}`}>
            <Grid item>
              {!isNextBooking && <Typography className={classes.statusLabel}>{currentStatus}</Typography>}
              {currentStatus === 'accepted' && (
                <NavLink to="/summary" className={classes.link}>
                  <Button variant="contained" color="secondary">
                    Checkout
                  </Button>
                </NavLink>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
