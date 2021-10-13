import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import { Fragment } from 'react';
interface PriceTag {
  currency?: string;
  amount: number;
  time?: string;
  size: string;
}

export default function PriceTag({ currency = '$', amount, time = 'hr', size }: PriceTag): JSX.Element {
  return (
    <Fragment>
      {size === 'small' ? (
        <Typography variant="subtitle2"> {`${currency} ${amount}/${time}`}</Typography>
      ) : size === 'medium' ? (
        <Typography variant="h4"> {`${currency} ${amount}/${time}`} </Typography>
      ) : (
        <Typography variant="h2"> {`${currency} ${amount}/${time}`} </Typography>
      )}
    </Fragment>
  );
}
