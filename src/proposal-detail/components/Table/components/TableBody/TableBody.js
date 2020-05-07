import React from 'react';
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './TableBodyStyle';

const TableBodyContent = props => {
  const {
    checked,
    rows,
    handleSelectOne,
    handleSelectAll,
    headers,
    rowsPerPage
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.inner}>
      <Table className={classes.table}>
        <TableHead data-test={'table-row-header'}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={checked.length === rows.length}
                color="primary"
                indeterminate={
                  checked.length > 0 && checked.length < rows.length
                }
                inputProps={{ 'data-test': 'table-header-column-checkbox' }}
                onChange={handleSelectAll}
              />
            </TableCell>
            {headers.map(header => (
              <TableCell data-test={'table-header-column'} key={header.label}>
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, rowsPerPage).map(row => (
            <TableRow
              className={classes.tableRow}
              data-test={'table-row-data'}
              hover
              key={row.id}
              onClick={event => handleSelectOne(event, row.id)}
              selected={checked.indexOf(row.id) !== -1}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={
                    checked.find(check => check.id === row.id) !== undefined
                  }
                  color="primary"
                  onChange={event => handleSelectOne(event, row.id)}
                  value="true"
                />
              </TableCell>
              {headers.map(header => (
                <TableCell key={row.id + header.value}>
                  {row[header.value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TableBodyContent.propTypes = {
  checked: PropTypes.array,
  handleSelectAll: PropTypes.func,
  handleSelectOne: PropTypes.func,
  rows: PropTypes.array,
  rowsPerPage: PropTypes.number
};

export default TableBodyContent;
