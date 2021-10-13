import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10rem',
    marginBottom: '10rem',
    minWidth: '20rem',
  },
  profileContainer: {
    alignItems: 'center',
    minHeight: '60vh',
    margin: 'auto',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginTop: '5rem',
  },
  titleText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    margin: 'auto',
  },
  avatar: {
    marginTop: '4rem',
    width: 150,
    height: 150,
  },
  caption: {
    marginTop: '2rem',
    color: theme.palette.text.secondary,
    width: '10rem',
  },
  uploadBtn: {
    marginTop: '2rem',
    color: theme.palette.error.dark,
    lineHeight: '3rem',
    minWidth: '20rem',
  },
  deleteBtn: {
    color: theme.palette.text.secondary,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  deleteIcon: {
    color: theme.palette.common.black,
  },
}));

export default useStyles;
