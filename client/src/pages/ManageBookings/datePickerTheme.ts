import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 20,
  overrides: {
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: '#f26969',
      },
    },
    MuiPickersDay: {
      daySelected: {
        color: '#fff',
        backgroundColor: '#ff5630',
      },
    },
  },
});

export default theme;
