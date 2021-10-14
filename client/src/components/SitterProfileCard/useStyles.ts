import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    minHeight: '25rem',
    width: '20rem',
  },
  avatar: {
    margin: '2rem auto 1rem auto',
    width: '8rem',
    height: '8rem',
  },
  rating: {
    width: '100%',
    margin: '0.5rem auto',
    justifyContent: 'center',
  },
  description: {
    margin: '0 2rem 1rem',
  },
  horizontalLine: {
    width: '100%',
    height: '1px',
    opacity: 0.2,
  },
  bottomContainer: {
    height: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    paddingLeft: '1.5rem',
  },
}));

export default useStyles;
