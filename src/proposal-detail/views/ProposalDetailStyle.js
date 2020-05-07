import { makeStyles } from '@material-ui/styles';
import theme from '../theme';

export default makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  logo: {
    color: theme.palette.primary.contrastText
  },
  proposalRoot: {
    padding: theme.spacing(3),
    width: '100%'
  },
  proposalContent: {
    padding: theme.spacing(2)
  },
  stepper: {
    backgroundColor: '#F4F6F8'
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
