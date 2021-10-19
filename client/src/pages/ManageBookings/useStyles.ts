import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: { palette: { secondary: { main?: string } } }) => ({
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
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
