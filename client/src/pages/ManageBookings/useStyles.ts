import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    paddingTop: 50,
  },
  bookingsPart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingPaper: {
    padding: 5,
    marginBottom: 30,
    width: '80%',
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
    margin: '0px 15px',
    width: '35px',
    height: '35px',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
