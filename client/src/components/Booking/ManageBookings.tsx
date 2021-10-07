import { useState } from 'react';
import Booking from './Booking';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { IRequest } from './IRequest';

const useStyles = makeStyles({
  root: {
    justifyContent: 'space-between',
  },
  selectedBooking: {
    padding: 10,
  },
  calendarGrid: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  noBooking: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    padding: '20px',
  },
});

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  const [date, changeDate] = useState<MaterialUiPickersDate>(new Date());
  const [isSelectedDate, setIsSelectedDate] = useState<boolean>(false);

  const [requests, setRequests] = useState<Array<IRequest>>([
    {
      status: 'pending',
      sitterId: '1',
      start: new Date(2021, 9, 8, 6),
      end: new Date(2021, 9, 8, 6),
    },
    {
      status: 'pending',
      sitterId: '1',
      start: new Date(2021, 9, 13, 6),
      end: new Date(2021, 9, 13, 6),
    },
    {
      status: 'accepted',
      sitterId: '2',
      start: new Date(2021, 10, 22, 14),
      end: new Date(2021, 10, 22, 15),
    },
    {
      status: 'declined',
      sitterId: '1',
      start: new Date(2021, 8, 1, 11),
      end: new Date(2021, 8, 1, 15),
    },
    {
      status: 'declined',
      sitterId: '3',
      start: new Date(2021, 10, 23, 14),
      end: new Date(2021, 10, 23, 15),
    },
  ]);
  const nextBooking = requests.reduce((request, closest) =>
    new Date(request.start.getTime() - new Date().getTime()) < closest.start
      ? (closest = request)
      : (closest = closest),
  );
  const [selectedBooking, setSelectedBooking] = useState<IRequest | undefined>(nextBooking);

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
        <span
          style={{
            border: '1px solid red',
            borderRadius: 20,
          }}
        >
          {dayCompmonent}
        </span>
      ) : (
        <span>{dayCompmonent}</span>
      );
    return component;
  };

  return (
    <Grid className={classes.root} container>
      <Grid item xs={5}>
        <Paper key="selectedBookingPaper">
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
        <Paper key="currentBookingsPaper">
          <Typography className={classes.selectedBooking}>CURRENT BOOKINGS:</Typography>
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
        </Paper>
        <Paper key="pastBookingsPaper">
          <Typography className={classes.selectedBooking}>PAST BOOKINGS:</Typography>
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
        </Paper>
      </Grid>
      <Grid container xs={7} className={classes.calendarGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default ManageBookings;
