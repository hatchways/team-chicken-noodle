import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { Fragment, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Box } from '@material-ui/core';
import Logo from '../../Images/logo.png';
import { Typography, Button, Badge, Link } from '@material-ui/core';
import AuthMenu from '../AuthMenu/AuthMenu';
import { NavLink } from 'react-router-dom';
import Notification from '../Notification/Notification';

export default function NavBar(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const classes = useStyles();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  return (
    <Fragment>
      <CssBaseline />
      <Box className={classes.box}>
        <AppBar
          elevation={3}
          position="static"
          className={`${!loggedInUser ? classes.appBar : classes.appBarLoggedIn}`}
        >
          <Toolbar className={classes.toolBar}>
            <img src={Logo} alt="logo" className={classes.logo} />
            <Box className={classes.box}></Box>
            <Box mr={5}>
              {!loggedInUser ? (
                <Fragment>
                  <NavLink to="/login" className={classes.link}>
                    <Button variant="outlined" size="large" color="secondary" className={classes.menuBarButton}>
                      <Typography variant="h6" color="inherit" className={classes.menuBarText}>
                        Login
                      </Typography>
                    </Button>
                  </NavLink>
                  <NavLink to="/signup" className={classes.link}>
                    <Button variant="contained" size="large" color="secondary" className={classes.menuBarButton}>
                      <Typography variant="h6" color="inherit" className={classes.menuBarText}>
                        SignUp
                      </Typography>
                    </Button>
                  </NavLink>
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink to="/listing" color="textPrimary" className={classes.linkText}>
                    BECOME A SETTER
                  </NavLink>
                  <Notification />
                  <NavLink to="/manage-bookings" className={classes.link}>
                    <Button className={classes.menuBarButton}>
                      <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
                        My Jobs
                      </Typography>
                    </Button>
                  </NavLink>
                  <NavLink to="/dashboard" className={classes.link}>
                    <Button className={classes.menuBarButton}>
                      <Badge color="primary" variant="dot" invisible={false}>
                        <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
                          Messages
                        </Typography>
                      </Badge>
                    </Button>
                  </NavLink>
                  <AuthMenu />
                </Fragment>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
