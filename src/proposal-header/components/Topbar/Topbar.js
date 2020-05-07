import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import useStyles from './TopbarStyle';

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Button
          data-test="topbar-logo"
          onClick={() => {
            window.history.pushState(null, null, '/');
          }}>
          <Typography className={classes.logo} variant="h4">
            Refactor Project
          </Typography>
        </Button>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit" data-test="topbar-notification">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            data-test="topbar-logout">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
