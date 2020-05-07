import React from 'react';
import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import useStyles from './HeaderStyle';

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.avatarContainer}>
        <LockIcon className={classes.avatar} data-test="login-icon" />
      </div>
      <Typography
        className={classes.title}
        data-test="login-title"
        variant="h3">
        Sign in
      </Typography>
    </>
  );
};

export default Header;
