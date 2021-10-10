import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Box } from '@material-ui/core';
import Logo from '../../Images/logo.png';
import { Typography, Button, Badge, Link } from '@material-ui/core';
import AuthMenu from '../AuthMenu/AuthMenu';

export default function NavBar(): JSX.Element {
  const col = { col: 'white' };
  const classes = useStyles(col);
  const el = 4;

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Fragment>
      <CssBaseline />
      <Box className={classes.box}>
        <AppBar position="static" elevation={el} className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <img src={Logo} alt="logo" className={classes.logo} />
            <Box className={classes.box}></Box>
            <Box mr={5}>
              <Link href="#" variant="h6" color="textPrimary" underline="always">
                BECOME A SITTER
              </Link>
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
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
