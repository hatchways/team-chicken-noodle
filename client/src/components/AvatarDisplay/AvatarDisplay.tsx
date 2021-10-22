import Avatar from '@material-ui/core/Avatar';
import { User } from '../../interface/User';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  loggedIn: boolean;
  user: User;
}

const AvatarDisplay = ({ user }: Props): JSX.Element => {
  const classes = makeStyles(() => ({
    avatar: {
      width: 60,
      height: 60,
    },
  }));
  return <Avatar alt="Profile Image" src={`https://robohash.org/${user.email}.png`} className={classes().avatar} />;
};

export default AvatarDisplay;
