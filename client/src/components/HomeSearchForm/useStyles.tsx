import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  searchText: {
    backgroundColor: theme.palette.common.white,
  },
  resetButton: {
    margin: '1rem 0rem',
  },
  label: {
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  textField: {
    marginTop: '1rem',
  },
  searchButton: {
    marginTop: '2rem',
  },
}));

export default useStyles;
