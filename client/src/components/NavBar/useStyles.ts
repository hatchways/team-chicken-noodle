import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

interface StyleProps {
  col: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  box: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: ({ col }) => col,
    height: 100,
  },
  toolBar: {
    height: '100%',
  },
  logo: {
    maxWidth: 180,
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
