import { useState, useEffect } from 'react';
import Booking from '../../components/Booking/Booking';
import { BookingRequest } from '../../interface/BookingRequest';
import { mockBookingRequest } from '../../mocks/mockBookingRequest';

import { Grid, Paper, Typography, Avatar, Container, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';

import useStyles from './useStyles';

const ManageBookings = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  const [date, changeDate] = useState<MaterialUiPickersDate>(new Date());
  const [isSelectedDate, setIsSelectedDate] = useState<boolean>(false);

  const [requests, setRequests] = useState<Array<BookingRequest>>(mockBookingRequest);
  const nextBooking = requests.reduce((request, closest) =>
    new Date(request.start.getTime() - new Date().getTime()) < closest.start &&
    request.start &&
    request.start > new Date()
      ? (closest = request)
      : (closest = closest),
  );
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | undefined>(nextBooking);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  const handleDateChange = (e: MaterialUiPickersDate) => {
    if (!e) return;
    changeDate(e);
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
    dayCompmonent: JSX.Element,
  ) => {
    const component =
      day &&
      Intl.DateTimeFormat('en').format(nextBooking.start) ===
        Intl.DateTimeFormat('en').format(new Date(day.toString())) ? (
        <Avatar className={classes.upcomingBookingCircle}>{dayCompmonent}</Avatar>
      ) : (
        <span>{dayCompmonent}</span>
      );
    return component;
  };

  return (
    <Grid container className={classes.root}>
      <Grid container xs={6} className={classes.bookingsPart}>
        <Paper key="selectedBookingPaper" className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>
            {isSelectedDate ? 'BOOKINGS ON SELECTED DATE:' : 'YOUR NEXT BOOKING:'}
          </Typography>
          {(selectedBooking && (
            <Booking
              status={selectedBooking.status}
              start={new Date(selectedBooking.start)}
              end={new Date(selectedBooking.end)}
              sitterId={selectedBooking.sitterId}
            />
          )) || (
            <Paper>
              <Grid className={classes.noBooking}>
                <Typography>No bookings on selected date</Typography>
              </Grid>
            </Paper>
          )}
        </Paper>
        <Paper key="currentBookingsPaper" className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>CURRENT BOOKINGS:</Typography>
          <Box overflow="auto" style={{ height: '200px' }}>
            {requests.map((request) => {
              if (request.start > new Date() && request != selectedBooking) {
                return (
                  <Booking
                    key={`${request.sitterId}${request.start.toString()}`}
                    status={request.status}
                    start={request.start}
                    end={request.end}
                    sitterId={request.sitterId}
                  />
                );
              }
            })}
          </Box>
        </Paper>
        <Paper key="pastBookingsPaper" className={classes.bookingPaper}>
          <Typography className={classes.selectedBooking}>PAST BOOKINGS:</Typography>
          <Box overflow="auto" style={{ height: '200px' }}>
            {requests.map((request) => {
              if (request.start < new Date()) {
                return (
                  <Booking
                    key={`${request.sitterId}${request.start.toString()}`}
                    status={request.status}
                    start={request.start}
                    end={request.end}
                    sitterId={request.sitterId}
                  />
                );
              }
            })}
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
