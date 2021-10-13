import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
    marginBottom: '10rem',
    minWidth: '15rem',
  },
  title: {
    marginTop: '4rem',
  },
  titleText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: '3rem',
  },
  loginContainer: {
    alignItems: 'center',
    minHeight: '38vh',
    margin: 'auto',
  },
}));

export default useStyles;
