import { makeStyles } from '@material-ui/core';

interface tempInterface {
  isNextBooking?: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
    border: '1px solid #f3f3f3',
  },
  leftColumn: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  rightColumn: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 15,
    paddingLeft: 0,
  },
  contactGrid: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: (props: tempInterface) => (props.isNextBooking ? 45 : 40),
    height: (props: tempInterface) => (props.isNextBooking ? 45 : 40),
  },
  secondLinePadding: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bookingSitterName: {
    fontSize: (props: tempInterface) => (props.isNextBooking ? 18 : 16),
    fontWeight: 'bold',
  },
  timeGrid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: (props: tempInterface) => (props.isNextBooking ? 18 : 16),
  },
  statusBar: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  statusLabel: {
    color: '#c5c5c5',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
}));

export default useStyles;
