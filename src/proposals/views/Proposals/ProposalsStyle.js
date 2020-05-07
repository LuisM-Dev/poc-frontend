import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    height: '100%',
    margin: theme.spacing(2)
  },
  searchInput: {
    margin: theme.spacing(2, 0)
  },
  proposalsRoot: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  }
}));
