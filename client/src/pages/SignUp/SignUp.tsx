import { Grid, Container, Typography, Paper, Box } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    {
      username,
      email,
      password,
      firstName,
      lastName,
    }: { email: string; password: string; username: string; firstName: string; lastName: string },
    {
      setSubmitting,
    }: FormikHelpers<{ email: string; password: string; username: string; firstName: string; lastName: string }>,
  ) => {
    register(username, email, password, firstName, lastName).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };
  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        xs={12}
        sm={8}
        md={8}
        elevation={6}
        className={classes.signUpContainer}
        component={Paper}
      >
        <Box mt={1}>
          <Grid item className={classes.title}>
            <Typography variant="h4" align="center" className={classes.titleText}>
              Sign up
            </Typography>
          </Grid>
          <SignUpForm handleSubmit={handleSubmit} />
        </Box>
      </Grid>
    </Container>
  );
}
