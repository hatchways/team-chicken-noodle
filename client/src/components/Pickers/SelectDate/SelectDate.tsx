import { Fragment } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useStyles from './useStyles';
import { useField, useFormikContext } from 'formik';

interface IDate {
  label: string;
  name: string;
}

export default function SelectDate(props: IDate): JSX.Element {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          {...field}
          inputVariant="outlined"
          label={props.label}
          format="MMMM dd"
          value={(field.value && new Date(field.value)) || null}
          disablePast
          className={classes.date}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}
