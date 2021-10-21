import { Fragment, useState, useContext, useEffect } from 'react';
import { Menu, MenuItem, Avatar, Button, Grid, Typography, Badge } from '@material-ui/core';
import useStyles from './useStyles';
import { NotificationContext } from '../../context/useNotificationContext';
import { getAllUnreadNotification, markAllNotificationRead } from '../../helpers/APICalls/notification';
import { useSnackBar } from '../../context/useSnackbarContext';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';

export default function Notification(): JSX.Element {
  const classes = useStyles();
  const [hideBadge, setBadge] = useState(true);
  const { updateSnackBarMessage } = useSnackBar();
  const { notification, dispatch } = useContext(NotificationContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setBadge(true);
  };

  const formatNotficationtime = (date: Date): string => {
    const parsedDate = parseISO(`${date}`);
    return format(new Date(parsedDate), 'Pp ');
  };

  useEffect(() => {
    getAllUnreadNotification().then((res) => {
      console.log(res);
      if (res.success && res.success.length === 0) {
        setBadge(true);
      } else if (res.success && res.success.length > 0) {
        setBadge(false);
        dispatch({ type: 'SET_NOTIFICATION', payload: res.success });
      } else {
        setBadge(true);
      }
    });
  }, [dispatch]);
  const handleClose = () => {
    setAnchorEl(null);
    if (notification.length !== 0) {
      markAllNotificationRead().then((res) => {
        console.log(res);
      });
    }
    dispatch({ type: 'RESET_NOTIFICATION', payload: [] });
    setBadge(true);
  };

  return (
    <Fragment>
      <Button aria-controls="authMenu" aria-haspopup="true" onClick={handleClick} className={classes.menuBarButton}>
        <Badge color="primary" variant="dot" invisible={hideBadge}>
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
        {notification.length > 0 ? (
          notification.map((notif) => {
            return (
              <MenuItem key={notif._id}>
                <Avatar variant="square" src={notif.context?.profileImage} className={classes.avatarSize} />
                <Grid>
                  <Typography variant="subtitle1" className={classes.boldText}>
                    {`${notif.context?.name} has requested your service for 2 hours`}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" className={classes.boldText}>
                    Dog sitting
                  </Typography>
                  <Typography variant="subtitle1" className={classes.boldText}>
                    {`${formatNotficationtime(notif.createdAt)}`}
                  </Typography>
                </Grid>
              </MenuItem>
            );
          })
        ) : (
          <MenuItem>
            <Typography variant="subtitle1" align="center" className={classes.boldText}>
              Your have no notification
            </Typography>
          </MenuItem>
        )}
      </Menu>
    </Fragment>
  );
}
