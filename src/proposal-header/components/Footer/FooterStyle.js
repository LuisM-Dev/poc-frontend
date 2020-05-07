import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  footerContainer: {
    backgroundColor: theme.palette.ibm.blue,
    color: 'white',
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
  },
  footer: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.ibm.blue,
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  button: {
    color: 'white',
    margin: theme.spacing(0, 2)
  }
}));
