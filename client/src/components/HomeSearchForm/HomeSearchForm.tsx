import { TextField, InputAdornment, InputLabel, Typography, Button, Grid } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import { useSnackBar } from '../../context/useSnackbarContext';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';
import { useContext } from 'react';
import { SearchContext } from '../../context/useSearchSitterContext';
import { searchSitter } from '../../helpers/APICalls/searchSitter';

const HomeSearchForm = (): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();
  const SearchSitter = useContext(SearchContext);
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = (
    { location, dropIn, dropOut }: { location: string; dropIn: Date; dropOut: Date },
    { setSubmitting }: FormikHelpers<{ location: string; dropIn: Date; dropOut: Date }>,
  ) => {
    SearchSitter.dispatch({
      type: 'SET_SEARCH_PARAMS',
      payload: {
        location: location,
        dropIn: dropIn,
        dropOut: dropOut,
      },
    });
    searchSitter({
      location: location,
      dropIn: dropIn,
      dropOut: dropOut,
    }).then((res) => {
      if (res.error) {
        updateSnackBarMessage(res.error.message);
      } else {
        if (res.success) {
          SearchSitter.dispatch({ type: 'UPDATE_SEARCH_RESULT', payload: res.success });
          history.push('/listing');
        }
      }
    });
  };

  return (
    <Formik
      initialValues={{
        location: 'Toronto',
        dropIn: new Date(),
        dropOut: new Date(),
      }}
      validationSchema={Yup.object().shape({
        location: Yup.string().required('Location is required').max(40, 'Location is too long'),
        dropIn: Yup.date().required('DropIn date is required'),
        dropOut: Yup.date().required('DropOut date is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <InputLabel className={classes.textField} htmlFor="location">
            <Typography variant="h6" className={classes.label}>
              WHERE
            </Typography>
          </InputLabel>
          <TextField
            id="location"
            name="location"
            className={classes.searchText}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn color="secondary" />
                </InputAdornment>
              ),
            }}
            helperText={touched.location ? errors.location : ''}
            error={touched.location && Boolean(errors.location)}
            value={values.location}
            onChange={handleChange}
          />
          <Grid item className={classes.textField}>
            <SelectDate label="Drop In" name="dropIn" />
            <SelectDate label="Drop Out" name="dropOut" />
          </Grid>
          <Button type="submit" size="large" variant="contained" color="secondary" className={classes.searchButton}>
            FIND MY DOG SITTER
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default HomeSearchForm;
