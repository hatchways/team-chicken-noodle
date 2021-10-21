import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: '0px 50px',
  },
  title: {
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileProp: {
    textTransform: 'uppercase',
    marginRight: '10px',
  },
  row: {
    alignItems: 'center',
    margin: 20,
    textAlign: 'right',
  },
  profilePropLabel: {
    width: '30%',
  },
  inputContainer: {
    alignItems: 'flex-start',
  },
  input: {
    border: '1px solid #e3e3e3',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
  },
  save: {
    justifyContent: 'center',
  },
  saveButton: {
    margin: '20px',
  },
}));

export default useStyles;
