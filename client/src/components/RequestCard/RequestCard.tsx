import { Grid, Paper, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import PriceTag from '../../components/PriceTag/PriceTag';
import SelectDate from '../../components/Pickers/SelectDate/SelectDate';
import SelectTime from '../../components/Pickers/SelectTime/SelectTime';

export default function RequestCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      xs={4}
      sm={4}
      md={4}
      elevation={6}
      component={Paper}
      className={classes.requestContainer}
    >
      <Grid container direction="column" item spacing={3} className={classes.requestContent}>
        <Grid item>
          <PriceTag amount={30} size="medium" />
        </Grid>
        <Grid item>
          <Rating name="read-only" value={3}></Rating>
        </Grid>
        <Grid item>
          <SelectDate label="Drop In" name="dropOut" />
          <SelectTime label="Time" />
        </Grid>
        <Grid item>
          <SelectDate label="Drop In" name="dropOut" />
          <SelectTime label="Time" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Send Request
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
