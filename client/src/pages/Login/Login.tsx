import { CssBaseline, Paper, Box, Grid, Typography, Container } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
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
      <CssBaseline />
      <Grid
        container
        direction="column"
        xs={12}
        sm={8}
        md={8}
        elevation={6}
        className={classes.loginContainer}
        component={Paper}
      >
        <Box mt={1}>
          <Grid item className={classes.title}>
            <Typography variant="h4" align="center" className={classes.titleText}>
              Welcome back!
            </Typography>
          </Grid>
          <LoginForm handleSubmit={handleSubmit} />
        </Box>
      </Grid>
    </Container>
  );
}
