import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10rem',
    marginBottom: '10rem',
    minWidth: '25rem',
  },
  profileContainer: {
    minWidth: '70rem',
    minHeight: '15rem',
    margin: 'auto',
    padding: '2rem',
  },
  userBox: {
    display: 'flex',
    width: '100%',
    marginTop: '1rem',
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputs: {
    lineHeight: '3rem',
    height: '3rem',
    width: '45ch',
    boxSizing: 'border-box',
  },
  textField: {
    marginTop: '1rem',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 200,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardElement: {
    border: '1px solid lightgrey',
    height: '3rem',
    marginTop: '1rem',
    padding: '1rem',
    display: 'grid',
    alignItems: 'center',
    borderRadius: '4px',
  },
}));

export default useStyles;
