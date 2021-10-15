import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  requestContainer: {
    marginLeft: '2rem',
    paddingTop: '2rem',
    height: '28rem',
    alignItems: 'center',
  },
  requestContent: {
    alignItems: 'center',
  },
  userBox: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  textFieldBox: {
    display: 'flex',
    width: '100%',
  },
  textArea: {
    width: '100%',
  },
}));

export default useStyles;
