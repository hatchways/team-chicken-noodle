import { Grid, Container, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { DeleteForeverOutlined } from '@material-ui/icons';
import ProfileImage from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';

export default function ProfilePhoto(): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        xs={12}
        sm={8}
        md={8}
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
          <Avatar alt="Profile Image" src={ProfileImage} className={classes.avatar} />
        </Grid>
        <Grid item className={classes.caption}>
          <Typography variant="caption" align="center" className={classes.captionText}>
            Be sure to use a photo that clearly shows your face
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="inherit" className={classes.uploadBtn}>
            Upload a file from your device
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            startIcon={<DeleteForeverOutlined className={classes.deleteIcon} />}
            className={classes.deleteBtn}
          >
            Delete Photo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
