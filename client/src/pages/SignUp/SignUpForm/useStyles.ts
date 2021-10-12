import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    color: theme.palette.common.black,
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
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    display: 'inline',
    paddingRight: '4px',
    fontWeight: 'bold',
  },
}));

export default useStyles;
