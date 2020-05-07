import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer } from '@material-ui/core';

import { Profile, SidebarNav } from './components';

import useStyles from './SidebarStyle';

const Sidebar = props => {
  const { variant } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open
      variant={variant}>
      <div className={classes.root}>
        <Profile data-test="sidebar-profile" />
        <Divider className={classes.divider} />
        <SidebarNav data-test="sidebar-items" />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  variant: PropTypes.string.isRequired
};

export default Sidebar;
