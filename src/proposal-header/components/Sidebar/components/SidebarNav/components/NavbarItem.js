import React, { useState } from 'react';
import clsx from 'clsx';
import { List, ListItem, Collapse, Button } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from './NavbarItemStyle';

const isActivePage = href => href === window.location.pathname;

const NavBarItem = props => {
  const { title, href, icon, children } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavClick = href => {
    window.history.pushState(null, null, href);
  };

  const createNavItem = () => {
    if (children) {
      return (
        <>
          <ListItem
            className={classes.item}
            data-test="sidebar-navItem"
            disableGutters
            onClick={handleClick}>
            <Button
              className={classes.button}
              data-test="sidebar-expand-button"
              onClick={handleClick}>
              <div className={classes.icon}>{icon}</div>
              {title}
              {open ? (
                <ExpandLess className={classes.expandIcon} color="inherit" />
              ) : (
                <ExpandMore className={classes.expandIcon} color="inherit" />
              )}
            </Button>
          </ListItem>
          <Collapse
            data-test="sidebar-collapse-menu"
            in={open}
            timeout="auto"
            unmountOnExit>
            <List component="div" disablePadding>
              {children.map(child => (
                <ListItem
                  className={classes.nested}
                  data-test="sidebar-subNavItem"
                  key={child.title}>
                  <Button
                    className={
                      isActivePage(child.href)
                        ? clsx(classes.buttonNested, classes.activeNested)
                        : classes.buttonNested
                    }
                    onClick={() => handleNavClick(child.href)}>
                    {child.title}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      );
    }
    return (
      <ListItem
        className={classes.item}
        data-test="sidebar-navItem"
        disableGutters>
        <Button
          activeclassname={classes.active}
          className={
            isActivePage(href)
              ? clsx(classes.button, classes.active)
              : classes.button
          }
          onClick={() => handleNavClick(href)}>
          <div className={classes.icon}>{icon}</div>
          {title}
        </Button>
      </ListItem>
    );
  };

  return createNavItem();
};

export default NavBarItem;
