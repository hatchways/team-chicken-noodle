import { Grid, Box, Avatar, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';
import PriceTag from '../PriceTag/PriceTag';

export default function SitterProfileCard(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container elevation={4} direction="column" component={Paper} className={classes.root}>
      <Grid item>
        <Avatar className={classes.avatar}>P</Avatar>

        <Typography align="center" variant="h5" color="textPrimary">
          Sitter Name
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Short description
        </Typography>
      </Grid>
      <Grid item>
        <Rating className={classes.rating} name="read-only" value={3}></Rating>
      </Grid>
      <Typography className={classes.description} align="center" variant="h6" color="textPrimary">
        This will be the description of the sitter.
      </Typography>
      <hr className={classes.horizontalLine}></hr>
      <Grid item container className={classes.bottomContainer}>
        <Grid item xs={2} className={classes.locationIcon}>
          <LocationOn color="secondary" />
        </Grid>
        <Grid item xs={7}>
          <Typography color="textSecondary">Toronto, Ontario</Typography>
        </Grid>
        <Grid item xs={3}>
          <PriceTag amount={15} size="medium" />
        </Grid>
      </Grid>
    </Grid>
  );
}
