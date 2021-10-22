import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageBookings from './pages/ManageBookings/ManageBookings';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import { NotificationProvider } from './context/useNotificationContext';
import { ProfileProvider } from './context/useProfileContext';
import { SitterSearchProvider } from './context/useSearchSitterContext';
import Listing from './pages/Listing/Listing';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <NotificationProvider>
                <SitterSearchProvider>
                  <ProfileProvider>
                    <NavBar />
                    <Switch>
                      <Route exact path="/home" component={HomePage} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/signup" component={Signup} />
                      <Route exact path="/listing" component={Listing} />
                      <ProtectedRoute exact path="/profile/profilePhoto" component={ProfilePhoto} />
                      <ProtectedRoute exact path="/profile/:id" component={ProfileDetails} />
                      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                      <ProtectedRoute exact path="/manage-bookings" component={ManageBookings} />
                      <ProtectedRoute exact path="/profile" component={Profile} />
                      <Route path="*">
                        <Redirect to="/home" />
                      </Route>
                    </Switch>
                  </ProfileProvider>
                </SitterSearchProvider>
              </NotificationProvider>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
