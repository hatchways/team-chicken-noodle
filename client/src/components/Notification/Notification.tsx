import { Fragment, useState } from 'react';
import { Menu, MenuItem, Avatar, Button, Grid, Typography, Badge } from '@material-ui/core';
import useStyles from './useStyles';

export default function Notification(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button aria-controls="authMenu" aria-haspopup="true" onClick={handleClick} className={classes.menuBarButton}>
        <Badge color="primary" variant="dot" invisible={false}>
          <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
            Notifications
          </Typography>
        </Badge>
      </Button>
      <Menu
        id="authMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: '30rem',
            borderTop: '3px solid black',
            borderRadius: 0,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        getContentAnchorEl={null}
      >
        <MenuItem>
          <Avatar variant="square" src="p" className={classes.avatarSize} />

          <Grid>
            <Typography variant="subtitle1" className={classes.boldText}>
              Marry has requested your service for 2 hours
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" className={classes.boldText}>
              Dog sitting
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              09/02/2022
            </Typography>
          </Grid>
        </MenuItem>
        <MenuItem>
          <Avatar variant="square" src="p" className={classes.avatarSize} />

          <Grid>
            <Typography variant="subtitle1" className={classes.boldText}>
              Marry has requested your service for 2 hours
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" className={classes.boldText}>
              Dog sitting
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              09/02/2022
            </Typography>
          </Grid>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
