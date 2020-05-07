import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Print as PrintIcon,
  GetApp as GetAppIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const TableOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="More Options">
        <IconButton
          aria-controls="customized-menu"
          aria-label="more options"
          data-test={'tableOptions-icon'}
          onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorEl}
        data-test={'tableOptions-menu'}
        id="customized-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}>
        <MenuItem data-test={'tableOptions-exportCSV'} onClick={handleClose}>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Export as csv" />
        </MenuItem>
        <MenuItem data-test={'tableOptions-print'} onClick={handleClose}>
          <ListItemIcon>
            <PrintIcon />
          </ListItemIcon>
          <ListItemText primary="Print" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default TableOptions;
