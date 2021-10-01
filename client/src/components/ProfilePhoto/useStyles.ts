import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '100px',
  },
  profileContainer: {
    display: 'flex',
    minWidth: '40vw',
    minHeight: '70vh',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
}));

export default useStyles;
