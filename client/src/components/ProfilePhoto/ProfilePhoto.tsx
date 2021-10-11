import { Grid, Container, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { DeleteForeverOutlined } from '@material-ui/icons';
import uploadImage from '../../helpers/APICalls/uploadImage';
import updateProfileImage from '../../helpers/APICalls/updateProfile';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function ProfilePhoto(): JSX.Element {
  const classes = useStyles();
  const [profileImage, setProfileImage] = React.useState<string>('');
  const { updateSnackBarMessage } = useSnackBar();
  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const imageFile = event.currentTarget.files[0];
      uploadImage(imageFile).then((data) => {
        if (data.error) {
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          const key: string = data.success.key;
          updateProfileImage(key).then((data) => {
            if (data.error) {
              updateSnackBarMessage(data.error.message);
            } else if (data.success) {
              setProfileImage(`/images/${key}`);
              updateSnackBarMessage('Image upload successful');
            }
          });
        } else {
          updateSnackBarMessage('An unexpected error occurred. Please try again');
        }
      });
    }
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
        className={classes.profileContainer}
        component={Paper}
      >
        <Grid item className={classes.title}>
          <Typography variant="h4" align="center" className={classes.titleText}>
            Profile Photo
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="Profile Image" src={profileImage} className={classes.avatar} />
        </Grid>
        <Grid item className={classes.caption}>
          <Typography variant="subtitle2" align="center">
            Be sure to use a photo that clearly shows your face
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" component="label" color="inherit" className={classes.uploadBtn}>
            Upload a file from your device
            <input type="file" onChange={handleSelectImage} hidden />
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
