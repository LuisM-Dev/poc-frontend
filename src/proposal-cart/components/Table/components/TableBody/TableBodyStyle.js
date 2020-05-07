import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  content: {
    padding: 0
  },
  table: {
    whiteSpace: 'nowrap'
  },
  inner: {
    minWidth: '100%'
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  tooltip: {
    maxWidth: 500,
    fontSize: '0.8rem'
  },
  filterInput: {
    padding: '5 0 5 10',
    color: 'grey',
    fontWeight: 'initial',
    background: 'white',
    fontSize: '0.8rem'
  },
  sortIcon: {
    display: 'flex',
    alignItems: 'center'
  }
}));
