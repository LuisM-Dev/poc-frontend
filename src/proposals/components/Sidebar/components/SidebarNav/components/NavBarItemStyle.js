import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: 0
  },
  buttonNested: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  active: {
    backgroundColor: '#f4f4f4',
    color: theme.palette.ibm.black,
    fontWeight: theme.typography.fontWeightBold,
    '& $icon': {
      color: theme.palette.ibm.black
    }
  },
  activeNested: {
    backgroundColor: '#f4f4f4',
    color: theme.palette.ibm.black
  }
}));
