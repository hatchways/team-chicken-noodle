import { Grid, Avatar, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';
import PriceTag from '../PriceTag/PriceTag';

export interface SitterProfile {
  id?: string;
  sitterName: string;
  sitterProfileImage: string;
  shortDescription: string;
  description: string;
  location: string;
  price: number;
  rating: number | null;
}

export default function SitterProfileCard({
  sitterName,
  sitterProfileImage,
  shortDescription,
  description,
  location,
  price,
  rating,
}: SitterProfile): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container elevation={4} direction="column" component={Paper} className={classes.root}>
      <Grid item>
        <Avatar src={sitterProfileImage} className={classes.avatar}>
          P
        </Avatar>

        <Typography align="center" variant="h5" color="textPrimary">
          {sitterName}
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          {shortDescription}
        </Typography>
      </Grid>
      <Grid item>
        <Rating className={classes.rating} name="read-only" value={rating}></Rating>
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
          <Typography color="textSecondary">{location}</Typography>
        </Grid>
        <Grid item xs={3}>
          <PriceTag amount={price} size="medium" />
        </Grid>
      </Grid>
    </Grid>
  );
}
