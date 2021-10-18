import { Grid, Paper, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import * as Yup from 'yup';
import PriceTag from '../../components/PriceTag/PriceTag';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import SelectTime from '../../components/Pickers/SelectTime/SelectTime';
import { Formik, FormikHelpers } from 'formik';

export default function RequestCard(): JSX.Element {
  const classes = useStyles();
  const handleSubmit = (
    { dropIn, dropOut, dropInTime, dropOutTime }: { dropOutTime: Date; dropIn: Date; dropInTime: Date; dropOut: Date },
    { setSubmitting }: FormikHelpers<{ dropOutTime: Date; dropIn: Date; dropInTime: Date; dropOut: Date }>,
  ) => {
    console.log(dropIn, dropOut, dropInTime, dropOutTime);
  };

  return (
    <Grid
      container
      direction="column"
      xs={4}
      sm={4}
      md={4}
      elevation={6}
      component={Paper}
      className={classes.requestContainer}
    >
      <Grid container direction="column" item spacing={3} className={classes.requestContent}>
        <Grid item>
          <PriceTag amount={30} size="medium" />
        </Grid>
        <Grid item>
          <Rating name="read-only" value={3}></Rating>
        </Grid>
        <Formik
          initialValues={{
            dropIn: new Date(),
            dropInTime: new Date(),
            dropOut: new Date(),
            dropOutTime: new Date(),
          }}
          validationSchema={Yup.object().shape({
            dropIn: Yup.date().required('DropIn date is required'),
            dropInTime: Yup.date().required('DropIn time is required'),
            dropOut: Yup.date().required('DropIn date is required'),
            dropOutTime: Yup.date().required('DropOut time is required'),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, values, touched, errors }) => (
            <form onSubmit={handleSubmit} noValidate className={classes.form}>
              <Grid item>
                <SelectDate label="Drop In" name="dropIn" />
                <SelectTime label="Time" name="dropInTime" />
              </Grid>
              <Grid item>
                <SelectDate label="Drop Out" name="dropOut" />
                <SelectTime label="Time" name="dropOutTime" />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="secondary">
                  Send Request
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Message
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
