import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    fontFamily: theme.typography.fontFamily,
    width: '100%',
    margin: '5rem 0 2rem 0',
    justifyContent: 'center',
  },
  root: {
    margin: '4rem 10rem',
  },
  searchText: {
    backgroundColor: theme.palette.common.white,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    margin: '1rem 0rem',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
