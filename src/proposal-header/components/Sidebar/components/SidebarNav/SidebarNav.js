import React from 'react';
import { List } from '@material-ui/core';
import NavBarItem from './components';

import { navPages } from '../../../../admin';

import useStyles from './SidebarNavStyle';

const SidebarNav = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {navPages.map(page => (
        <NavBarItem key={page.title} {...page} />
      ))}
    </List>
  );
};

export default SidebarNav;
