import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './LoadingStyle';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color={'primary'} data-test={'loading'} />
    </div>
  );
};

export default Loading;
