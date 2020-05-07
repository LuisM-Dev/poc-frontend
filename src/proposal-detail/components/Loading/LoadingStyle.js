import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    height: '7vh',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    padding: '2% 0'
  }
}));
