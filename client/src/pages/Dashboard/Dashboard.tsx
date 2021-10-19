import { Grid } from '@material-ui/core';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import Listing from '../Listing/Listing';

export default function Dashboard(): JSX.Element {
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);
  return (
    <Grid>
      <Listing />
    </Grid>
  );
}
