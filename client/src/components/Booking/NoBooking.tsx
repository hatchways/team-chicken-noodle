import { Grid, Paper, Typography } from '@material-ui/core';

import { NoBookingProps } from '../../interface/NoBookingProps';

import useStyles from './useStylesNoBooking';

const NoBooking = (props: NoBookingProps) => {
  const classes = useStyles();

  return (
    <Paper>
      <Grid className={classes.noBooking}>
        <Typography>{props.text}</Typography>
      </Grid>
    </Paper>
  );
};

export default NoBooking;
