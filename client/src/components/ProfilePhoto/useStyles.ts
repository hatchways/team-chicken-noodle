import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '10rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileContainer: {
    display: 'flex',
    minWidth: '50rem',
    minHeight: '40rem',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginTop: '5rem',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    margin: 'auto',
  },
  avatar: {
    marginTop: '50px',
    width: 100,
    height: 100,
  },
  caption: {
    marginTop: '2rem',
    width: '15rem',
    textAlign: 'center',
    color: 'primary',
  },
  captionText: {},
}));

export default useStyles;
