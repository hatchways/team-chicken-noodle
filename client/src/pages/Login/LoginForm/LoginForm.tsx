import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <InputLabel className={classes.textField} htmlFor="email">
            <Typography variant="subtitle2" className={classes.label}>
              E-MAIL ADDRESS
            </Typography>
          </InputLabel>
          <TextField
            id="email"
            variant="outlined"
            placeholder="Your email"
            fullWidth
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <InputLabel className={classes.textField} htmlFor="email">
            <Typography variant="subtitle2" className={classes.label}>
              PASSWORD
            </Typography>
          </InputLabel>
          <TextField
            id="password"
            variant="outlined"
            placeholder="Your password"
            fullWidth
            InputProps={{
              classes: { input: classes.inputs },
              endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                <Typography variant="button" color="inherit">
                  LOGIN
                </Typography>
              )}
            </Button>
            <Button size="large" variant="contained" color="secondary" className={classes.submit}>
              <Typography variant="button" color="inherit">
                LOGIN DEMO
              </Typography>
            </Button>
          </Box>
          <Box mt={4} className={classes.bottomBox} textAlign="center">
            <Typography className={classes.bottomText}> Don&apos;t have account? </Typography>
            <Link to="/signup" color="secondary">
              <Typography color="secondary">Create an account</Typography>
            </Link>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
