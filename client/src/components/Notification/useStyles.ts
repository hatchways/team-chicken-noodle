import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },

  boldText: {
    fontWeight: 'bold',
  },
  alignText: {
    width: '100%',
    textAlign: 'right',
  },
  avatarSize: {
    margin: '0 1rem 0 0',
    width: 80,
    height: 80,
  },
  menuBarText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bolder',
  },
  menuBarButton: {
    marginRight: '2rem',
  },
  noNotificationText: {
    width: '100%',
  },
}));

export default useStyles;
