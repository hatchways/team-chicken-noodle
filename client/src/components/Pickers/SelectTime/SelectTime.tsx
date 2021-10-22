import { Fragment, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useStyles from './useStyles';
import { useField, useFormikContext } from 'formik';

interface IDate {
  label: string;
  name: string;
}

export default function SelectTime(props: IDate): JSX.Element {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          {...field}
          inputVariant="outlined"
          ampm={true}
          value={(field.value && new Date(field.value)) || null}
          label={props.label}
          className={classes.date}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}
