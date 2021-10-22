import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.palette.common.white,
  },
  homeImage: {
    width: '100%',
    minHeight: '100vh',
  },
  searchBox: {
    padding: '0 12rem',
  },
  titleText: {
    margin: '14rem  0 4rem 0',
    fontWeight: 'bold',
  },
}));

export default useStyles;
