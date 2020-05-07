/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Collapse, Button } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: 0
  },
  buttonNested: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  active: {
    backgroundColor: '#f4f4f4',
    color: theme.palette.ibm.black,
    fontWeight: theme.typography.fontWeightBold,
    '& $icon': {
      color: theme.palette.ibm.black
    }
  },
  activeNested: {
    backgroundColor: '#f4f4f4',
    color: theme.palette.ibm.black
  }
}));

const NavBarItem = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { title, href, icon, children } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavClick = href => {
    window.history.pushState(null, null, href);
  };

  const createNavItem = () => {
    let navItem;
    if (children) {
      navItem = (
        <>
          <ListItem
            className={classes.item}
            disableGutters
            onClick={handleClick}>
            <Button className={classes.button} onClick={handleClick}>
              <div className={classes.icon}>{icon}</div>
              {title}
              {open ? (
                <ExpandLess className={classes.expandIcon} color="inherit" />
              ) : (
                <ExpandMore className={classes.expandIcon} color="inherit" />
              )}
            </Button>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map(child => (
                <ListItem className={classes.nested} key={child.title}>
                  <Button
                    activeclassname={classes.activeNested}
                    className={classes.buttonNested}
                    onClick={() => handleNavClick(child.href)}>
                    {child.title}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      );
    } else {
      navItem = (
        <ListItem className={classes.item} disableGutters>
          <Button
            activeclassname={classes.active}
            className={classes.button}
            onClick={() => handleNavClick(href)}>
            <div className={classes.icon}>{icon}</div>
            {title}
          </Button>
        </ListItem>
      );
    }
    return navItem;
  };

  return createNavItem();
};

export default NavBarItem;
