import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  cardHeader: {
    padding: theme.spacing(1, 2)
  },
  content: {
    padding: theme.spacing(2)
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'
  },
  button: {
    margin: theme.spacing(0.5, 0)
  },
  table: {
    minWidth: 650
  }
}));
