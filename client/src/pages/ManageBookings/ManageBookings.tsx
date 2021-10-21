import { useState, useEffect } from 'react';
import Booking from '../../components/Booking/Booking';
import NoBooking from '../../components/Booking/NoBooking';
import { BookingRequest } from '../../interface/BookingRequest';

import { Grid, Paper, Typography, Avatar, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { requestList } from '../../helpers/APICalls/request';

import useStyles from './useStyles';

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();

  const [date, setDate] = useState<MaterialUiPickersDate>(new Date());
  const [isSelectedDate, setIsSelectedDate] = useState<boolean>(false);

  const [requests, setRequests] = useState<Array<BookingRequest>>([]);

  const nextBooking = requests
    .filter((request) => request.start.getTime() - new Date().getTime() > 0)
    .reduce((request, closest) =>
      closest.start.getTime() - new Date().getTime() > request.start.getTime() - new Date().getTime()
        ? request
        : closest,
    );
  nextBooking.isNextBooking = true;
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | undefined>(nextBooking);

  const handleDateChange = (e: MaterialUiPickersDate) => {
    if (!e) return;
    setDate(e);
    setIsSelectedDate(true);
    const request = requests.find(
      (request) => Intl.DateTimeFormat('en').format(request.start) === Intl.DateTimeFormat('en').format(e),
    );
    setSelectedBooking(request);
  };

  const renderDay = (
    day: MaterialUiPickersDate,
    selectedDate: MaterialUiPickersDate,
    dayInCurrentMonth: boolean,
    dayComponent: JSX.Element,
  ) => {
    const component =
      day &&
      nextBooking &&
      Intl.DateTimeFormat('en').format(nextBooking.start) ===
        Intl.DateTimeFormat('en').format(new Date(day.toString())) ? (
        <Avatar className={classes.upcomingBookingCircle}>{dayComponent}</Avatar>
      ) : (
        <span>{dayComponent}</span>
      );
    return component;
  };

  let currentBookings: JSX.Element;
  const currentBookingRequests = requests.filter(
    (request) => request.start > new Date() && request !== selectedBooking,
  );
  if (currentBookingRequests.length) {
    currentBookings = (
      <>
        {currentBookingRequests.map((request) => (
          <Booking
            _id={request._id}
            key={`${request._id}`}
            status={request.status}
            start={request.start}
            end={request.end}
            sitterId={request.sitterId}
          />
        ))}
      </>
    );
  } else {
    currentBookings = <NoBooking key="noPastBooking" text="No current bookings found" />;
  }

  let pastBookings: JSX.Element;
  const pastBookingRequests = requests.filter((request) => request.start < new Date());
  if (pastBookingRequests.length) {
    pastBookings = (
      <>
        {pastBookingRequests.map((request) => (
          <Booking
            _id={request._id}
            key={`${request._id}`}
            status={request.status}
            start={request.start}
            end={request.end}
            sitterId={request.sitterId}
          />
        ))}
      </>
    );
  } else {
    pastBookings = <NoBooking key="noPastBooking" text="No past bookings found" />;
  }

  return (
    <Grid container className={classes.root}>
      <Grid container xs={6} className={classes.bookingsPart}>
        <Paper className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>
            {isSelectedDate ? 'booking on selected date' : 'your next booking:'}
          </Typography>
          {(selectedBooking && (
            <Booking
              _id={selectedBooking._id}
              status={selectedBooking.status}
              start={selectedBooking.start}
              end={selectedBooking.end}
              sitterId={selectedBooking.sitterId}
              isNextBooking={selectedBooking.isNextBooking}
            />
          )) || <NoBooking text="No bookings for selected date" />}
        </Paper>
        <Paper className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>current bookings:</Typography>
          <Box overflow="auto" maxHeight="200px">
            {currentBookings}
          </Box>
        </Paper>
        <Paper className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>past bookings:</Typography>
          <Box overflow="auto" maxHeight="200px">
            {pastBookings}
          </Box>
        </Paper>
      </Grid>
      <Grid container xs={6} className={classes.calendarGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Paper>
            <DatePicker
              autoOk
              disableToolbar
              disablePast
              variant="static"
              openTo="date"
              value={date}
              onChange={handleDateChange}
              renderDay={renderDay}
            />
          </Paper>
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default ManageBookings;
