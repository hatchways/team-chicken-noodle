import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem',
    marginBottom: '10rem',
    minWidth: '70rem',
  },
  profileContainer: {
    alignItems: 'center',
    padding: '4rem 4rem',
    minHeight: '70vh',
    margin: 'auto',
  },
  avatar: {
    margin: '2rem auto 1rem auto',
    width: '8rem',
    height: '8rem',
  },
  avatarSmall: {
    width: '2rem',
    height: '2rem',
    marginRight: '1rem',
  },
  sitterName: {
    fontWeight: 'bold',
  },
  locationBox: {
    display: 'inline-flex',
  },
  locationIcon: {
    paddingLeft: '1.5rem',
  },
  rating: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  description: {
    margin: '0 3rem 1rem',
  },
  aboutMeBox: {
    width: '100%',
    fontWeight: 'bold',
  },
  aboutMeTitle: {
    fontWeight: 'bold',
  },
  reviewBox: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    flexGrow: 1,
  },
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
