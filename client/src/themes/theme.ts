import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto","Open Sans", "sans-serif", ',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: '#ff5630' },
  },
  shape: {
    borderRadius: 5,
  },
});
