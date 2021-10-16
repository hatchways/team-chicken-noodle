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
    fontWeight: 'bold',
  },
  calendarGrid: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  upcomingBookingCircle: {
    width: '35px',
    height: '35px',
    backgroundColor: '#ff5630',
  },
});

export default useStyles;
