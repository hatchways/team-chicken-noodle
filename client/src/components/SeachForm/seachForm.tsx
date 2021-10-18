import { TextField, InputAdornment, Button } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';

interface Props {
  handleSubmit: (
    {
      location,
      dropIn,
      dropOut,
    }: {
      location: string;
      dropIn: Date;
      dropOut: Date;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      location: string;
      dropIn: Date;
      dropOut: Date;
    }>,
  ) => void;
}

const SearchForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

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
          <SelectDate label="Drop In" name="dropIn" />
          <SelectDate label="Drop Out" name="dropOut" />
          <Button type="submit" size="small" variant="text" color="secondary" className={classes.resetButton}>
            Search
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default SearchForm;
