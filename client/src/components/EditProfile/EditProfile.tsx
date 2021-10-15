import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './useStyles';

import { Profile } from '../../interface/Profile';

import { useState } from 'react';

import { useFormik } from 'formik';

const EditProfile = (props: Profile): JSX.Element => {
  const classes = useStyles();

  const [birthDate, setSelectedDate] = useState<Date | null>(new Date());

  const formik = useFormik({
    initialValues: props,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Paper>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <h2 className={classes.title}>Edit Profile</h2>
        </Grid>
        <Grid container direction="column" className={classes.profileContainer}>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>First name</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>Last name</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    placeholder="Last name"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>Gender</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <FormControl className={classes.input}>
                    <NativeSelect id="gender" value={formik.values.gender} onChange={formik.handleChange}>
                      <option value={'male'}>Male</option>
                      <option value={'female'}>Female</option>
                      <option selected value={'unkown'}>
                        Unkown
                      </option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row" className={classes.row}>
                  <Grid item xs={3}>
                    <InputLabel className={classes.profileProp}>birth date</InputLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <KeyboardDatePicker
                      disableToolbar
                      fullWidth
                      variant="inline"
                      format="MM/dd/yyyy"
                      value={birthDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>email</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    id="email"
                    placeholder="Email"
                    className={classes.input}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>Phone number</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    id="phoneNumber"
                    placeholder="Phone number"
                    className={classes.input}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>Where you live</InputLabel>
                </Grid>
                <Grid container xs={8} direction="column">
                  <Grid item>
                    <Input
                      id="address.city"
                      placeholder="City"
                      className={classes.input}
                      value={formik.values.address?.city}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      id="address.province"
                      placeholder="Province"
                      className={classes.input}
                      value={formik.values.address?.province}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      id="address.country"
                      placeholder="Country"
                      className={classes.input}
                      value={formik.values.address?.country}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className={classes.row}>
                <Grid item xs={3}>
                  <InputLabel className={classes.profileProp}>Describe yourself</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    id="description"
                    multiline
                    rows={4}
                    placeholder="About you"
                    className={classes.input}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.save}>
              <Button color="secondary" variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default EditProfile;
