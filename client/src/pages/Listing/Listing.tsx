import { Grid, Typography } from '@material-ui/core';
import SitterProfileCard from '../../components/SitterProfileCard/SitterProfileCard';
import useStyles from './useStyle';
import SearchForm from '../../components/SeachForm/seachForm';
import { FormikHelpers } from 'formik';
import { useContext } from 'react';
import { SearchContext } from '../../context/useSearchSitterContext';
import { searchSitter } from '../../helpers/APICalls/searchSitter';
import { IProfile } from '../../interface/Profile';

export default function Listing(): JSX.Element {
  const classes = useStyles();
  const SearchSitter = useContext(SearchContext);
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
      if (res.success) {
        SearchSitter.dispatch({ type: 'UPDATE_SEARCH_RESULT', payload: res.success });
      }
    });
  };

  const dummyData: IProfile[] = SearchSitter.result;

  return (
    <Grid container>
      <Grid container spacing={4} item className={classes.searchBar}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Your Search result
          </Typography>
        </Grid>
        <Grid item>
          <SearchForm handleSubmit={handleSubmit} />
        </Grid>
      </Grid>

      <Grid container className={classes.root}>
        <Grid container item spacing={8} className={classes.listingContainer}>
          {dummyData ? (
            dummyData.map((data) => (
              <Grid key={data._id} item>
                <SitterProfileCard
                  address={data.address}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  profilePhoto={data.profilePhoto}
                  description={data.description}
                  shortDescription={data.shortDescription}
                />
              </Grid>
            ))
          ) : (
            <Grid></Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
