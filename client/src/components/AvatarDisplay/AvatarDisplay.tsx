import Avatar from '@material-ui/core/Avatar';
import { User } from '../../interface/User';
import { makeStyles } from '@material-ui/core/styles';
import { ProfileContext } from '../../context/useProfileContext';
import { useContext } from 'react';

interface Props {
  loggedIn: boolean;
  user: User;
}

const AvatarDisplay = ({ user }: Props): JSX.Element => {
  const Profile = useContext(ProfileContext);
  const classes = makeStyles(() => ({
    avatar: {
      width: 60,
      height: 60,
    },
  }));
  return <Avatar alt="Profile Image" src={Profile.url} className={classes().avatar} />;
};

export default AvatarDisplay;
