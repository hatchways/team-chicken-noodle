import { Grid, Container, Typography, Button, Avatar, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export default function Summary(): JSX.Element {
  const [pickerDate, setDate] = useState<MaterialUiPickersDate>(new Date());

  const classes = useStyles();
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
            Your Order Details
          </Typography>
          <Grid item className={classes.userBox}>
            <Avatar alt="Profile Image" src="images/fae49229659862629c1efb8dbb4329b6" className={classes.avatarSmall} />
            <Grid item>
              <Typography variant="h5" color="textPrimary" className={classes.boldText}>
                Sitter Name
              </Typography>
              <Typography color="textPrimary"> Hourly Rate: $30</Typography>
              <Grid item className={classes.rating}>
                <Typography color="textPrimary"> Rating: </Typography> <Rating value={3} name="read-only" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} className={classes.pickerBox}>
          <Grid item xs={12} className={classes.pickerSpacing}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                inputVariant="outlined"
                label="Drop In"
                format="MMMM dd"
                value={pickerDate}
                disablePast
                readOnly
                className={classes.date}
                onChange={(newDate: MaterialUiPickersDate) => setDate(newDate)}
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                inputVariant="outlined"
                ampm={true}
                value={pickerDate}
                label="Time"
                readOnly
                className={classes.date}
                onChange={(newDate: MaterialUiPickersDate) => setDate(newDate)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                inputVariant="outlined"
                label="Drop Out"
                format="MMMM dd"
                value={pickerDate}
                disablePast
                readOnly
                className={classes.date}
                onChange={(newDate: MaterialUiPickersDate) => setDate(newDate)}
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                inputVariant="outlined"
                ampm={true}
                value={pickerDate}
                label="Time"
                readOnly
                className={classes.date}
                onChange={(newDate: MaterialUiPickersDate) => setDate(newDate)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item xs={3} className={classes.summaryBox}>
          <Typography className={classes.summaryTitle} variant="h6" color="textPrimary">
            Summary
          </Typography>
          <Grid item className={classes.summaryRow}>
            <Grid item>Total Hours</Grid>
            <Grid item>24</Grid>
          </Grid>
          <Grid item className={classes.summaryRow}>
            <Grid item>Price</Grid>
            <Grid item>$30/hr</Grid>
          </Grid>
          <Grid item className={classes.summaryRow}>
            <Grid item>Subtotal</Grid>
            <Grid item>$720</Grid>
          </Grid>
          <Grid item className={classes.summaryRow}>
            <Grid item>Service Fee</Grid>
            <Grid item>$21.6</Grid>
          </Grid>
          <hr className={classes.horizontalLine}></hr>
          <Grid item className={classes.summaryRow}>
            <Grid item>Total</Grid>
            <Grid item>$741.6</Grid>
          </Grid>
          <Grid item className={classes.paymentButton}>
            <Button variant="outlined" color="secondary">
              Continue to Payment
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
