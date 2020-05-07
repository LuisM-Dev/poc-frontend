import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logo: {
    color: theme.palette.primary.contrastText
  }
}));
