import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  TablePagination
} from '@material-ui/core';
import { TableToolBar, TableBody } from './components';

import useStyles from './TableStyle';

const Table = props => {
  const {
    checked,
    dispatch,
    headers,
    options,
    lineItems,
    searchedLineItem,
    title
  } = props;
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    let newSelectedRows;
    if (event.target.checked) {
      newSelectedRows = lineItems;
    } else {
      newSelectedRows = [];
    }
    dispatch(newSelectedRows);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = checked.findIndex(item => item.id === id);
    let newselectedRows = [];
    if (selectedIndex === -1) {
      newselectedRows = newselectedRows.concat(
        checked,
        lineItems.find(row => row.id === id)
      );
    } else if (selectedIndex === 0) {
      newselectedRows = newselectedRows.concat(checked.slice(1));
    } else if (selectedIndex === checked.length - 1) {
      newselectedRows = newselectedRows.concat(checked.slice(0, -1));
    } else if (selectedIndex > 0) {
      newselectedRows = newselectedRows.concat(
        checked.slice(0, selectedIndex),
        checked.slice(selectedIndex + 1)
      );
    }
    dispatch(newselectedRows);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card>
      <CardContent className={classes.content}>
        <TableToolBar options={options} selected={checked} title={title} />
        <TableBody
          checked={checked}
          handleSelectAll={handleSelectAll}
          handleSelectOne={handleSelectOne}
          headers={headers}
          lineItems={lineItems}
          rowsPerPage={rowsPerPage}
          searchedLineItem={searchedLineItem}
        />
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={lineItems.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

Table.propTypes = {
  checked: PropTypes.array,
  className: PropTypes.string,
  lineItems: PropTypes.array,
  searchedLineItem: PropTypes.string,
  title: PropTypes.string
};

export default Table;
