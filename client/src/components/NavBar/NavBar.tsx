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
                  <Button variant="outlined" size="large" color="secondary" className={classes.menuBarButton}>
                    <Typography variant="h6" color="inherit" className={classes.menuBarText}>
                      Login
                    </Typography>
                  </Button>
                  <Button variant="contained" size="large" color="secondary" className={classes.menuBarButton}>
                    <Typography variant="h6" color="inherit" className={classes.menuBarText}>
                      SignUp
                    </Typography>
                  </Button>
                </Fragment>
              ) : (
                <Fragment>
                  <Link
                    href="#"
                    variant="subtitle2"
                    color="textPrimary"
                    className={classes.linkText}
                    underline="always"
                  >
                    BECOME A SETTER
                  </Link>
                  <Button className={classes.menuBarButton}>
                    <Badge color="primary" variant="dot" invisible={false}>
                      <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
                        Notifications
                      </Typography>
                    </Badge>
                  </Button>
                  <Button className={classes.menuBarButton}>
                    <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
                      My Jobs
                    </Typography>
                  </Button>
                  <Button className={classes.menuBarButton}>
                    <Badge color="primary" variant="dot" invisible={false}>
                      <Typography variant="h6" color="textPrimary" className={classes.menuBarText}>
                        Messages
                      </Typography>
                    </Badge>
                  </Button>
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
