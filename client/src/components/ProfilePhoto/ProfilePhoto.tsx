import { Grid, Container, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { DeleteForeverOutlined } from '@material-ui/icons';
import uploadImage from '../../helpers/APICalls/uploadImage';
import updateProfileImage from '../../helpers/APICalls/updateProfile';
import { useSnackBar } from '../../context/useSnackbarContext';
interface ProfileImageKey {
  key: string;
}

export default function ProfilePhoto(): JSX.Element {
  const classes = useStyles();
  const [profileImage, setProfileImage] = React.useState<string>('');
  const { updateSnackBarMessage } = useSnackBar();
  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files) {
      const imageFile = event.currentTarget.files[0];
      handleUploadImage(imageFile);
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

  function handleUploadImage(imageFile: File): void {
    uploadImage(imageFile).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        const imageKey: ProfileImageKey = { key: data.success.key };
        handleUpdateProfileImage(imageKey.key);
      } else {
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  }

  function handleUpdateProfileImage(key: string): void {
    updateProfileImage(key).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else {
        setProfileImage(`/images/${key}`);
        updateSnackBarMessage('Image upload successful');
      }
    });
  }
}
