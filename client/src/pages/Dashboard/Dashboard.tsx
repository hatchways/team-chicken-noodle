import { Grid, Box } from '@material-ui/core';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';

export default function Dashboard(): JSX.Element {
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);
  return (
    <Grid container>
      <Box color="primary"></Box>
    </Grid>
  );
}
