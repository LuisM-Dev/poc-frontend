import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '10px 0'
  },
  headingContainer: {
    backgroundColor: '#f4f4f4'
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary
  },
  textField: {
    width: '80%'
  }
}));
