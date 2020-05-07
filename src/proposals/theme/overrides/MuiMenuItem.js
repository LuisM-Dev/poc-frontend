import palette from '../palette';

export default {
  root: {
    '&:focus': {
      backgroundColor: palette.ibm.blue,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: palette.white
      }
    }
  }
};
