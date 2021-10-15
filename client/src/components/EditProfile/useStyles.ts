import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
  },
  form: {
    width: '100%',
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
    margin: 10,
    textAlign: 'right',
  },
  profilePropLabel: {
    width: '30%',
  },
  input: {
    border: '1px solid #e3e3e3',
    borderRadius: '5px',
    padding: '5px',
    width: '100%',
  },
  save: {
    justifyContent: 'center',
  },
}));

export default useStyles;
