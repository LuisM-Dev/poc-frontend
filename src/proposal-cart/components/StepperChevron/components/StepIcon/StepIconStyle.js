import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundColor: theme.palette.ibm.black
  },
  completed: {
    backgroundColor: theme.palette.ibm.blue
  }
}));
