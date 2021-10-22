import { Grid, Typography, InputAdornment, Button, Container, CardMedia } from '@material-ui/core';
import { Fragment } from 'react';
import useStyles from './useStyles';
import homeImage from '../../Images/home.png';
import HomeSearchForm from '../../components/HomeSearchForm/HomeSearchForm';

export default function HomePage(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={6} className={classes.searchBox}>
          <Typography variant="h2" className={classes.titleText}>
            Find the care your dog deserves
          </Typography>
          <HomeSearchForm />
        </Grid>
        <Grid item xs={6} className={classes.homeImage}>
          <CardMedia component="img" image={homeImage} alt="Paella dish" className={classes.homeImage} />
        </Grid>
      </Grid>
    </div>
  );
}
