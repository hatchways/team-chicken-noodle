import { Grid, Typography, InputAdornment, Button } from '@material-ui/core';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SitterProfileCard, { SitterProfile } from '../../components/SitterProfileCard/SitterProfileCard';
import useStyles from './useStyle';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import { LocationOn } from '@material-ui/icons';
export default function Listing(): JSX.Element {
  const { initSocket } = useSocket();
  const classes = useStyles();
  const dummyData: SitterProfile[] = [
    {
      shortDescription: 'this is short description',
      description: 'This is the description for sitter, i am dog lover',
      price: 15,
      sitterName: 'Hatchways',
      rating: 5,
      location: 'Toronto',
      sitterProfileImage: 'images/fae49229659862629c1efb8dbb4329b6',
    },
    {
      shortDescription: 'this is short description',
      description: 'This is the description for sitter, i am dog lover',
      price: 15,
      sitterName: 'Hatchways',
      rating: 2,
      location: 'Toronto',
      sitterProfileImage: 'https://picsum.photos/200/300',
    },
    {
      shortDescription: 'this is short description',
      description: 'This is the description for sitter, i am dog lover',
      price: 15,
      sitterName: 'Hatchways',
      rating: 1,
      location: 'Toronto',
      sitterProfileImage: 'https://picsum.photos/300/300',
    },
    {
      shortDescription: 'this is short description',
      description: 'This is the description for sitter, i am dog lover',
      price: 15,
      sitterName: 'Hatchways',
      rating: 0,
      location: 'Toronto',
      sitterProfileImage: 'https://picsum.photos/400/300',
    },
    {
      shortDescription: 'this is short description',
      description: 'This is the description for sitter, i am dog lover',
      price: 15,
      sitterName: 'Hatchways',
      rating: 4,
      location: 'Toronto',
      sitterProfileImage: 'https://picsum.photos/500/300',
    },
  ];

  useEffect(() => {
    initSocket();
  }, [initSocket]);
  return (
    <Grid container>
      <Grid container spacing={4} item className={classes.searchBar}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Your Search result
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            className={classes.searchText}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn color="secondary" />
                </InputAdornment>
              ),
            }}
            value="Toronto"
          />
          <SelectDate label="Drop In" />
          <SelectDate label="Drop Out" />
        </Grid>
        <Button size="small" variant="text" color="secondary" className={classes.resetButton}>
          Reset
        </Button>
      </Grid>

      <Grid container className={classes.root}>
        <Grid container item spacing={8} className={classes.listingContainer}>
          {dummyData ? (
            dummyData.map((data) => (
              <Grid key={data.sitterName} item>
                <SitterProfileCard
                  location={data.location}
                  sitterName={data.sitterName}
                  price={data.price}
                  sitterProfileImage={data.sitterProfileImage}
                  rating={data.rating}
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
