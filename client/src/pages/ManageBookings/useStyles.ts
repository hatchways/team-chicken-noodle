import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  bookingsPart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingPaper: {
    padding: 5,
    marginBottom: 10,
    width: '60%',
  },
  selectedBooking: {
    padding: 7,
    textTransform: 'uppercase',
  },
  calendarGrid: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  upcomingBookingCircle: {
    width: '35px',
    height: '35px',
    color: 'white',
    backgroundColor: '#f04545',
  },
});

export default useStyles;
