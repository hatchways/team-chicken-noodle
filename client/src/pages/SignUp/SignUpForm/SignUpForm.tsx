import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress, InputLabel } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
      firstName: string;
      lastName: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
      firstName: string;
      lastName: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
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
            fullWidth
            placeholder="Your email"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <InputLabel className={classes.textField} htmlFor="username">
            <Typography variant="subtitle2" className={classes.label}>
              USERNAME
            </Typography>
          </InputLabel>
          <TextField
            id="username"
            variant="outlined"
            fullWidth
            placeholder="Your username"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
          />
          <InputLabel className={classes.textField} htmlFor="firstName">
            <Typography variant="subtitle2" className={classes.label}>
              First and Last Name
            </Typography>
          </InputLabel>
          <TextField
            id="firstName"
            variant="outlined"
            fullWidth
            placeholder="First name"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="firstName"
            autoComplete="firstName"
            autoFocus
            helperText={touched.firstName ? errors.firstName : ''}
            error={touched.firstName && Boolean(errors.firstName)}
            value={values.firstName}
            onChange={handleChange}
          />
          <TextField
            id="lastName"
            variant="outlined"
            fullWidth
            placeholder="Last name"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="lastName"
            autoComplete="lastName"
            autoFocus
            helperText={touched.lastName ? errors.lastName : ''}
            error={touched.lastName && Boolean(errors.lastName)}
            value={values.lastName}
            onChange={handleChange}
          />
          <InputLabel className={classes.textField} htmlFor="password">
            <Typography variant="subtitle2" className={classes.label}>
              PASSWORD
            </Typography>
          </InputLabel>
          <TextField
            id="password"
            variant="outlined"
            fullWidth
            placeholder="Create a password"
            InputProps={{
              classes: { input: classes.inputs },
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
                  SIGN UP
                </Typography>
              )}
            </Button>
          </Box>
          <Box mt={4} className={classes.bottomBox} textAlign="center">
            <Typography className={classes.bottomText}>Already a member? </Typography>
            <Link to="/login" color="secondary">
              <Typography color="secondary">Login</Typography>
            </Link>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
