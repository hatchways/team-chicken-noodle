import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10rem',
    marginBottom: '10rem',
    minWidth: '25rem',
  },
  profileContainer: {
    minWidth: '70rem',
    minHeight: '15rem',
    margin: 'auto',
    padding: '2rem',
  },
  userBox: {
    display: 'flex',
    width: '100%',
    marginTop: '1rem',
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  avatarSmall: {
    width: '6rem',
    height: '6rem',
    marginRight: '2rem',
  },
  date: {
    width: '10rem',
    backgroundColor: theme.palette.common.white,
  },
  box: {
    flexGrow: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  pickerBox: {
    marginTop: '2rem',
  },
  pickerSpacing: {
    marginBottom: '2rem',
  },
  summaryBox: {
    border: '1px solid lightGrey',
    borderRadius: '4px',
    paddingBottom: '1rem',
  },
  summaryTitle: {
    margin: '1rem 1rem',
  },
  summaryRow: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
  },
  paymentButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  horizontalLine: {
    width: '100%',
    height: '1px',
    opacity: 0.2,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
