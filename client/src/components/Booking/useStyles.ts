import { makeStyles } from '@material-ui/core';

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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
  contactGrid: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  secondLinePadding: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bookingSitterName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeGrid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusBar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 7,
  },
  statusLabel: {
    color: '#c5c5c5',
    textTransform: 'uppercase',
    fontSize: 15,
  },
}));

export default useStyles;
