import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import { Fragment } from 'react';
import useStyles from './useStyles';
interface PriceTag {
  currency?: string;
  amount: number;
  time?: string;
  size: string;
}

export default function PriceTag({ currency = '$', amount, time = 'hr', size }: PriceTag): JSX.Element {
  const classes = useStyles();
  return (
    <Fragment>
      {size === 'small' ? (
        <Typography variant="subtitle2" className={classes.priceText}>
          {`${currency}${amount}/${time}`}
        </Typography>
      ) : size === 'medium' ? (
        <Typography variant="h6" className={classes.priceText}>
          {`${currency}${amount}/${time}`}
        </Typography>
      ) : (
        <Typography variant="h2" className={classes.priceText}>
          {`${currency}${amount}/${time}`}
        </Typography>
      )}
    </Fragment>
  );
}
