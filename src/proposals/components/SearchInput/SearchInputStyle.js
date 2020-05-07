import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
    margin: theme.spacing(2, 0)
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));
