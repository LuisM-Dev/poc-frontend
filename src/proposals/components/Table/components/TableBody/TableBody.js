import React, { useEffect, useMemo } from 'react';
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
import { useTable, useGlobalFilter } from 'react-table';
import uniqid from 'uniqid';

const TableBodyContent = props => {
  const {
    checked,
    columns,
    data,
    handleSelectOne,
    handleSelectAll,
    rowsPerPage,
    searchedProposal
  } = props;
  const classes = useStyles();

  useEffect(() => {
    setGlobalFilter(searchedProposal);
  }, [searchedProposal]);

  const proposalsColumns = useMemo(() => columns);

  const proposalsData = useMemo(() => data);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable(
    {
      columns: proposalsColumns,
      data: proposalsData
    },
    useGlobalFilter
  );

  return (
    <div className={classes.inner}>
      <Table className={classes.table} {...getTableProps()}>
        <TableHead data-test={'table-row-header'}>
          {headerGroups.map(headerGroup => (
            <TableRow key={uniqid()}>
              <TableCell
                data-test={'table-row-header-checkbox'}
                padding="checkbox">
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
              {headerGroup.headers.map(column => (
                <TableCell
                  data-test={'table-row-header-column'}
                  key={uniqid()}
                  {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.slice(0, rowsPerPage).map(row => {
            prepareRow(row);
            return (
              <TableRow
                data-test={'table-row-data'}
                key={uniqid()}
                onClick={event => handleSelectOne(event, row.original.id)}
                selected={checked.indexOf(row.original.id) !== -1}
                {...row.getRowProps()}>
                <TableCell
                  data-test={'table-row-data-checkbox'}
                  padding="checkbox">
                  <Checkbox
                    checked={
                      checked.find(check => check.id === row.original.id) !==
                      undefined
                    }
                    color="primary"
                    onChange={event => handleSelectOne(event, row.original.id)}
                    value="true"
                  />
                </TableCell>
                {row.cells.map(cell => (
                  <TableCell
                    data-test={'table-row-data-content'}
                    key={uniqid()}
                    {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

TableBodyContent.propTypes = {
  checked: PropTypes.array,
  columns: PropTypes.array,
  data: PropTypes.array,
  handleSelectAll: PropTypes.func,
  handleSelectOne: PropTypes.func,
  rowsPerPage: PropTypes.number,
  searchedProposal: PropTypes.string
};

export default TableBodyContent;
