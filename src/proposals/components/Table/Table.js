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
  const { columns, data, searchedProposal, title } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    let newSelectedRows;
    if (event.target.checked) {
      newSelectedRows = data;
    } else {
      newSelectedRows = [];
    }
    setChecked(newSelectedRows);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = checked.findIndex(item => item.id === id);
    let newSelectedRows = [];
    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(
        checked,
        data.find(row => row.id === id)
      );
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(checked.slice(1));
    } else if (selectedIndex === checked.length - 1) {
      newSelectedRows = newSelectedRows.concat(checked.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        checked.slice(0, selectedIndex),
        checked.slice(selectedIndex + 1)
      );
    }
    setChecked(newSelectedRows);
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
        <TableToolBar selected={checked} title={title} />
        <TableBody
          checked={checked}
          columns={columns}
          data={data}
          handleSelectAll={handleSelectAll}
          handleSelectOne={handleSelectOne}
          rowsPerPage={rowsPerPage}
          searchedProposal={searchedProposal}
        />
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={data.length}
          data-test={'table-pagination'}
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
  columns: PropTypes.array,
  data: PropTypes.array,
  searchedProposal: PropTypes.string,
  title: PropTypes.string
};

export default Table;
