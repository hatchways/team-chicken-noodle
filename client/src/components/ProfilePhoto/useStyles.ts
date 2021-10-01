import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '10rem',
    marginBottom: '10rem',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Roboto',
    fontWeight: 'bolder',
    fontSize: '1.5rem',
    margin: 'auto',
  },
  avatar: {
    marginTop: '4rem',
    width: 150,
    height: 150,
  },
  caption: {
    marginTop: '2rem',
    color: '#9e9e9e',
    width: '10rem',
    textAlign: 'center',
  },
  captionText: {
    fontSize: '12px',
  },
  uploadBtn: {
    marginTop: '2rem',
    color: '#d32f2f',
    fontSize: '12px',
    lineHeight: '3rem',
    minWidth: '20rem',
  },
  deleteBtn: {
    color: '#9e9e9e',
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  deleteIcon: {
    color: '#000000',
  },
}));

export default useStyles;
