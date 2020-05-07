import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    margin: theme.spacing(2),
    color: '#fff',
    width: 80,
    height: 80,
    padding: theme.spacing(2),
    borderRadius: '100px',
    backgroundColor: theme.palette.ibm.black
  },
  title: {
    margin: theme.spacing(0, 0, 2, 0)
  }
}));
