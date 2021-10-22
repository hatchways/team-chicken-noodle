import { Fragment, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useStyles from './useStyles';

interface DateIn {
  label: string;
}

export default function SelectTime({ label }: DateIn): JSX.Element {
  const [date, setDate] = useState<Date | null>(new Date());
  const classes = useStyles();

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          inputVariant="outlined"
          ampm={true}
          label={label}
          value={date}
          className={classes.date}
          onChange={(newDate) => setDate(newDate)}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}
