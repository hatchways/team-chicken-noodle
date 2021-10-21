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
  overrides: {
    MuiPickersBasePicker: {
      container: {
        padding: '15px',
      },
      pickerView: {
        minWidth: '30rem',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: '#ff5630',
      },
      dayLabel: {
        margin: '0px 15px',
      },
    },
    MuiPickersDay: {
      day: {
        margin: '0px 15px',
      },
      daySelected: {
        color: '#fff',
        backgroundColor: '#ff5630',
      },
    },
  },
});
