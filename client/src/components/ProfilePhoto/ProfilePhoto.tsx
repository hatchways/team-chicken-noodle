import { Grid, Container, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { DeleteForeverOutlined } from '@material-ui/icons';

export default function ProfilePhoto(): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        xs={12}
        sm={8}
        md={7}
        elevation={6}
        className={classes.profileContainer}
        component={Paper}
      >
        <Grid item className={classes.title}>
          <Typography variant="h5" align="center" className={classes.titleText}>
            Profile Photo
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="Profile Image" src="https://robohash.org/pursharth01@gmail.com.png" className={classes.avatar} />
        </Grid>
        <Grid item className={classes.caption}>
          <Typography variant="caption" align="center" className={classes.captionText}>
            Be sure to use a photo that clearly shows your face
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined"> Upload a file from your device</Button>
        </Grid>
        <Grid item>
          <DeleteForeverOutlined />
          <Button variant="text">Delete Photo</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
