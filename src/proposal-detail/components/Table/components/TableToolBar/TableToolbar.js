import React from 'react';
import clsx from 'clsx';
import { Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { RowOptions, TableOptions } from './components';

import useStyles from './TableToolBarStyle';

const TableToolbar = props => {
  const classes = useStyles();
  const { title, selected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: selected.length > 0
      })}>
      {selected.length > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          data-test={'tableToolbar-selected-title'}
          variant="subtitle1">
          {selected.length} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          data-test={'tableToolbar-title'}
          id="tableTitle"
          variant="h5">
          {title}
        </Typography>
      )}
      {selected.length === 1 ? (
        <RowOptions id={selected[0].installedCustomerNumber} />
      ) : (
        <TableOptions />
      )}
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  selected: PropTypes.array,
  title: PropTypes.string
};

export default TableToolbar;
