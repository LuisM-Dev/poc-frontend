import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    width: '600px',
    padding: theme.spacing(2)
  },
  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
