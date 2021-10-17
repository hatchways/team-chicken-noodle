import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    flexGrow: 1,
  },
  appBar: {
    height: 100,
    backgroundColor: 'transparent',
  },
  appBarLoggedIn: {
    height: 100,
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    height: '100%',
  },
  logo: {
    maxWidth: 180,
  },
  link: {
    textDecoration: 'none',
  },
  linkText: {
    fontFamily: theme.typography.fontFamily,
    marginRight: '2rem',
    fontWeight: 'bolder',
    textDecoration: 'underline',
    color: theme.palette.common.black,
  },
  menuBarText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bolder',
  },
  menuBarButton: {
    marginRight: '2rem',
  },
}));

export default useStyles;
