import React, { useEffect, useMemo } from 'react';
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './TableBodyStyle';
import { ExpandLess, ExpandMore, Remove } from '@material-ui/icons';
import {
  useTable,
  useExpanded,
  useSortBy,
  useFilters,
  useGlobalFilter
} from 'react-table';

const TableBodyContent = props => {
  const {
    checked,
    lineItems,
    handleSelectOne,
    handleSelectAll,
    headers,
    searchedLineItem,
    rowsPerPage
  } = props;
  const classes = useStyles();

  useEffect(() => {
    setGlobalFilter(searchedLineItem);
  }, [searchedLineItem]);

  const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
    return (
      <TextField
        fullWidth
        inputProps={{
          className: classes.filterInput
        }}
        label={''}
        margin="dense"
        onChange={e => {
          setFilter(e.target.value || undefined);
        }}
        value={filterValue || ''}
        variant="outlined"
      />
    );
  };

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const columns = useMemo(() => [
    {
      id: 'expander',
      Header: ({ getToggleAllRowsExpandedProps }) => (
        <span {...getToggleAllRowsExpandedProps()}>Sub Line Items</span>
      ),
      Cell: ({ row }) =>
        row.canExpand ? (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: '2rem'
              }
            })}>
            {row.isExpanded ? <ExpandLess /> : <ExpandMore />}
          </span>
        ) : (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: '2rem'
              }
            })}>
            <Remove />
          </span>
        )
    },
    ...headers
  ]);

  const data = useMemo(() => lineItems);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded
  );

  return (
    <div className={classes.inner}>
      {console.log(lineItems)}
      <Table className={classes.table} {...getTableProps()}>
        <TableHead data-test={'table-row-header'}>
          {headerGroups.map(headerGroup => (
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={checked.length === lineItems.length}
                  color="primary"
                  indeterminate={
                    checked.length > 0 && checked.length < lineItems.length
                  }
                  inputProps={{ 'data-test': 'table-header-column-checkbox' }}
                  onChange={handleSelectAll}
                />
              </TableCell>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className={classes.sortIcon}>
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : (
                      ''
                    )}
                  </div>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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
                onClick={event => handleSelectOne(event, row.original.id)}
                selected={checked.indexOf(row.original.id) !== -1}
                {...row.getRowProps()}>
                <TableCell padding="checkbox">
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
                {row.cells.map((cell, index) => {
                  return index === 1 ? (
                    <Tooltip
                      classes={{ tooltip: classes.tooltip }}
                      key={row.original.id}
                      leaveDelay={400}
                      title={row.original.message}>
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    </Tooltip>
                  ) : (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
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
  handleSelectAll: PropTypes.func,
  handleSelectOne: PropTypes.func,
  headers: PropTypes.array,
  lineItems: PropTypes.array,
  rowsPerPage: PropTypes.number,
  searchedLineItem: PropTypes.string
};

export default TableBodyContent;
