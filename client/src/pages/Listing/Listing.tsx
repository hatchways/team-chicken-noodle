import { Grid, Box, Typography, InputAdornment, Button } from '@material-ui/core';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SitterProfileCard from '../../components/SitterProfileCard/SitterProfileCard';
import useStyles from './useStyle';
import SelectDate from '../../components/SelectDate/SelectDate';
import { LocationOn } from '@material-ui/icons';
export default function Listing(): JSX.Element {
  const { initSocket } = useSocket();
  const classes = useStyles();

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
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
          <Grid item>
            <SitterProfileCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
