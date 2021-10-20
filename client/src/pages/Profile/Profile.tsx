import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//import EditProfile from '../../components/EditProfile/EditProfile';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: '7px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Profile = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Edit profile" {...a11yProps(0)} />
            <Tab label="Profile Photo" {...a11yProps(1)} />
            <Tab label="Payment" {...a11yProps(2)} />
            <Tab label="Security" {...a11yProps(3)} />
            <Tab label="Settings" {...a11yProps(4)} />
          </Tabs>
        </div>
      </Grid>
      <Grid item xs={7}>
        <TabPanel value={value} index={0}>
          {"<EditProfile userId={'0'} />"}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProfilePhoto />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Payment
        </TabPanel>
        <TabPanel value={value} index={3}>
          Security
        </TabPanel>
        <TabPanel value={value} index={4}>
          Settings
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default Profile;
