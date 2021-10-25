import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import * as Yup from 'yup';
import PriceTag from '../../components/PriceTag/PriceTag';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import SelectTime from '../../components/Pickers/SelectTime/SelectTime';
import { Formik, FormikHelpers } from 'formik';
import { requestCreate } from '../../helpers/APICalls/request';
import { useState } from 'react';
import { sendNotification } from '../../helpers/APICalls/notification';
import { useAuth } from '../../context/useAuthContext';
import { ProfileContext } from '../../context/useProfileContext';
import { useContext } from 'react';
interface Props {
  id: string;
}

export default function RequestCard({ id }: Props): JSX.Element {
  const { loggedInUser } = useAuth();
  const classes = useStyles();
  const Profile = useContext(ProfileContext);
  const [isRequestSent, setRequestStatus] = useState(false);
  const handleSubmit = (
    { dropIn, dropOut, dropInTime, dropOutTime }: { dropOutTime: Date; dropIn: Date; dropInTime: Date; dropOut: Date },
    { setSubmitting }: FormikHelpers<{ dropOutTime: Date; dropIn: Date; dropInTime: Date; dropOut: Date }>,
  ): void => {
    // send notification to sitter that this user requested the service
    requestCreate(id, dropIn, dropOut).then((res) => {
      if (res.request) {
        setRequestStatus(true);
        sendNotification(id, 'request', 'Request for dog sitting', 'Request for dog sitting', {
          name: loggedInUser?.username || ' ',
          profilePhoto: Profile.id,
        });
      }
    });
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
              <Grid item className={classes.requestDate}>
                <SelectDate label="Drop In" name="dropIn" />
                <SelectTime label="Time" name="dropInTime" />
              </Grid>
              <Grid item className={classes.requestDate}>
                <SelectDate label="Drop Out" name="dropOut" />
                <SelectTime label="Time" name="dropOutTime" />
              </Grid>
              {isRequestSent ? (
                <Typography variant="subtitle2"> Request has been sent to the sitter </Typography>
              ) : (
                <Grid item className={classes.cardButtons}>
                  <Button type="submit" variant="contained" color="secondary">
                    Send Request
                  </Button>
                </Grid>
              )}

              <Grid item className={classes.cardButtons}>
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
