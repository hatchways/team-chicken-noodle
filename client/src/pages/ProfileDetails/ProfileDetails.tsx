import { Grid, Avatar, Paper, Typography, Container, Button, TextField, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import { LocationOn, Create, Close } from '@material-ui/icons';
import RequestCard from '../../components/RequestCard/RequestCard';
import { useState, Fragment } from 'react';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const [isReviewOpen, toggleReview] = useState(false);

  const handelEvent = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggleReview(!isReviewOpen);
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        xs={12}
        sm={8}
        md={8}
        elevation={6}
        spacing={2}
        className={classes.profileContainer}
        component={Paper}
      >
        <Grid item>
          <Avatar alt="Profile Image" src="images/fae49229659862629c1efb8dbb4329b6" className={classes.avatar} />
        </Grid>
        <Typography align="center" variant="h4" color="textPrimary" className={classes.sitterName}>
          Hatchy Hatchways
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Short description
        </Typography>
        <Grid item className={classes.locationBox}>
          <Grid item>
            <LocationOn color="secondary" />
          </Grid>
          <Grid item>
            <Typography color="textSecondary">Location</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography color="textPrimary">Availability : Mon , Tue, Web, Thurs , Fri</Typography>
        </Grid>
        <Grid item className={classes.aboutMeBox}>
          <Typography variant="h5" color="textPrimary" className={classes.aboutMeTitle}>
            About Me
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Here will be the long description about sitters
          </Typography>
        </Grid>
        <Grid item className={classes.reviewBox}>
          <Grid item>
            <Typography color="textPrimary">Rating and Review (0)</Typography>
          </Grid>
          <Box className={classes.box}></Box>
          <Grid item>
            {!isReviewOpen ? (
              <Button variant="contained" color="secondary" startIcon={<Create />} onClick={handelEvent}>
                Write a Review
              </Button>
            ) : (
              <Button variant="contained" color="secondary" startIcon={<Close />} onClick={handelEvent}>
                Close
              </Button>
            )}
          </Grid>
        </Grid>
        {!isReviewOpen ? (
          <Fragment></Fragment>
        ) : (
          <Fragment>
            <Grid item className={classes.userBox}>
              <Grid item>
                <Avatar
                  alt="Profile Image"
                  src="images/fae49229659862629c1efb8dbb4329b6"
                  className={classes.avatarSmall}
                />
              </Grid>
              <Grid item>
                <Typography color="textPrimary"> Reviewer Name</Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.rating}>
              <Typography color="textPrimary"> Rating: </Typography> <Rating value={3} name="read-only" />
            </Grid>
            <Grid item className={classes.textFieldBox}>
              <TextField
                multiline
                variant="outlined"
                placeholder="Write a review"
                rows={3}
                className={classes.textArea}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Fragment>
        )}
      </Grid>
      <RequestCard />
    </Container>
  );
}
