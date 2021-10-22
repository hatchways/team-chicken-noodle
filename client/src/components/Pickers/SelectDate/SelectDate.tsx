import { Fragment, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useStyles from './useStyles';

interface DateIn {
  label: string;
}

export default function SelectDate({ label }: DateIn): JSX.Element {
  const [date, setDate] = useState<Date | null>(new Date());
  const classes = useStyles();

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          inputVariant="outlined"
          label={label}
          value={date}
          format="MMMM dd"
          disablePast
          className={classes.date}
          onChange={(newDate) => setDate(newDate)}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}
