import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5)
  },
  spacer: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  subtitle: {
    color: theme.typography.subtitle
  }
}));
