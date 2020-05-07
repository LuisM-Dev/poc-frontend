import palette from '../palette';

export default {
  colorPrimary: {
    '&$checked': {
      color: palette.ibm.blue
    },
    '&$checked + $track': {
      backgroundColor: palette.ibm.blue
    }
  }
};
