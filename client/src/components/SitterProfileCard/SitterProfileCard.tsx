import { Grid, Avatar, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';
import PriceTag from '../PriceTag/PriceTag';
import { IProfile } from '../../interface/Profile';

export default function SitterProfileCard({
  firstName,
  lastName,
  shortDescription,
  profilePhoto,
  description,
  address,
}: IProfile): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container elevation={4} direction="column" component={Paper} className={classes.root}>
      <Grid item>
        <Avatar src={`/images/${profilePhoto}`} className={classes.avatar}>
          P
        </Avatar>

        <Typography align="center" variant="h5" color="textPrimary">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          {shortDescription}
        </Typography>
      </Grid>
      <Grid item>
        <Rating className={classes.rating} name="read-only" value={0}></Rating>
      </Grid>
      <Typography className={classes.description} align="center" variant="h6" color="textPrimary">
        {description}
      </Typography>
      <hr className={classes.horizontalLine}></hr>
      <Grid item container className={classes.bottomContainer}>
        <Grid item xs={2} className={classes.locationIcon}>
          <LocationOn color="secondary" />
        </Grid>
        <Grid item xs={7}>
          <Typography color="textSecondary">{address?.city}</Typography>
        </Grid>
        <Grid item xs={3}>
          <PriceTag amount={15} size="medium" />
        </Grid>
      </Grid>
    </Grid>
  );
}
