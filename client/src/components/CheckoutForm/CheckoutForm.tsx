import { Grid, Container, Typography, Radio, TextField, Box, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CircularProgress } from '@material-ui/core';
import { getPaymentIntent } from '../../helpers/APICalls/checkout';
import { useSnackBar } from '../../context/useSnackbarContext';

const CardElementOption = {
  hidePostalCode: true,
};
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
interface Checkout {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const CheckoutForm = (): JSX.Element => (
  <Elements stripe={stripePromise}>
    <Checkout />
  </Elements>
);

const Checkout = (): JSX.Element => {
  const { updateSnackBarMessage } = useSnackBar();
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();

  const handleSubmit = async (
    { fullName, email, phoneNumber }: Checkout,
    { setSubmitting }: FormikHelpers<Checkout>,
  ) => {
    const cardElement = elements?.getElement(CardElement);
    const paymentMethodReq = await stripe?.createPaymentMethod({
      type: 'card',
      card: cardElement!,
      billing_details: {
        email: email,
        name: fullName,
        phone: phoneNumber,
      },
    });

    // @TODO replace `request id` with actual id of the request
    const paymentIndent = await getPaymentIntent(4000, 'request id');

    if (paymentIndent.success) {
      const confirmedCardPayment = await stripe?.confirmCardPayment(paymentIndent.success.clientSecret, {
        payment_method: paymentMethodReq?.paymentMethod?.id,
      });
      console.log(confirmedCardPayment);
      if (confirmedCardPayment?.paymentIntent?.status === 'succeeded') {
        updateSnackBarMessage('Payment was successful');
      }
      if (confirmedCardPayment?.error) {
        updateSnackBarMessage(`${confirmedCardPayment.error.message}`);
      }
    } else {
      updateSnackBarMessage(`${paymentIndent?.error}`);
    }
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        xs={12}
        sm={8}
        md={8}
        elevation={6}
        className={classes.profileContainer}
        component={Paper}
      >
        <Grid item xs={4}>
          <Typography variant="h4" className={classes.boldText}>
            Checkout
          </Typography>
          <Grid item className={classes.userBox}>
            <Grid item>
              <Typography variant="subtitle1" color="textPrimary">
                Payment Options
              </Typography>
              <Grid item className={classes.rating}>
                <Radio checked={true} value="a" name="radio-buttons" />
                <Typography variant="subtitle2" color="textPrimary">
                  Credit & Debit Card
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
            }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string().required('Full Name is required').max(40, 'Full Name is too long'),
              email: Yup.string().required('Email is required').email('Email is not valid'),
              phoneNumber: Yup.number()
                .required('Phone Number is required')
                .min(1000000000, 'Phone Number too short')
                .max(9999999999, 'Phone Number is too long'),
            })}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <TextField
                  id="fullName"
                  variant="outlined"
                  fullWidth
                  label="Full Name"
                  placeholder="Your name"
                  InputProps={{
                    classes: { input: classes.inputs },
                  }}
                  className={classes.textField}
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                  helperText={touched.fullName ? errors.fullName : ''}
                  error={touched.fullName && Boolean(errors.fullName)}
                  value={values.fullName}
                  onChange={handleChange}
                />

                <TextField
                  id="email"
                  variant="outlined"
                  label="Email"
                  fullWidth
                  placeholder="Your email"
                  InputProps={{
                    classes: { input: classes.inputs },
                  }}
                  className={classes.textField}
                  name="email"
                  autoComplete="email"
                  helperText={touched.email ? errors.email : ''}
                  error={touched.email && Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                />

                <TextField
                  id="phoneNumber"
                  variant="outlined"
                  fullWidth
                  label="Number"
                  placeholder="Your Phone Number"
                  InputProps={{
                    classes: { input: classes.inputs },
                  }}
                  className={classes.textField}
                  type="phoneNumber"
                  autoComplete="current-phoneNumber"
                  helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <Grid item className={classes.cardElement}>
                  <CardElement options={CardElementOption}></CardElement>
                </Grid>
                <Box textAlign="center">
                  <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
                    {isSubmitting ? (
                      <CircularProgress style={{ color: 'white' }} />
                    ) : (
                      <Typography variant="subtitle1" color="inherit" className={classes.boldText}>
                        Confirm & Pay $741.6
                      </Typography>
                    )}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutForm;
