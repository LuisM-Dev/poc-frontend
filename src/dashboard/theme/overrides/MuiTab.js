import palette from '../palette';

export default {
  root: {
    borderRight: '1px solid rgba(63,63,68,0.15)',
    borderBottom: '1px solid rgba(63,63,68,0.15)',
    '&$selected': {
      fontWeight: 'bold',
      backgroundColor: palette.white,
      borderBottom: '1px solid white'
    }
  },
  fullWidth: false
};
