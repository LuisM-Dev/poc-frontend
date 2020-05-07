import palette from '../palette';

export default {
  root: {
    '& label.Mui-focused': {
      color: palette.ibm.black
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'rgba(0,0,0,0.15)'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: palette.ibm.black
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: palette.ibm.black
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.ibm.black
      }
    },
    // '.MuiOutlinedInput-root.Mui-focused fieldset': {
    //   borderColor: '#e7396d'
    // }
  }
};
