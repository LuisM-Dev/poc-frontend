import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Table from '../Table';
import SearchInput from '../SearchInput';
import { ProductDetails } from './components';
import useStyles from './ProductsStyle';
import { useStore, SEARCH_PRODUCTS, CHECKED_PRODUCTS } from '../../store';
import { proposalCart } from '../../admin';

const tableOptions = [
  { option: 'view', component: <ProductDetails /> },
  { option: 'delete' }
];

const Products = () => {
  const [searchedLineItem, setSearchedLineItem] = useState('');
  const [state, dispatch] = useStore();
  const classes = useStyles();

  useEffect(() => {
    if (state.proposal.id && state.proposal.type) {
      dispatch(SEARCH_PRODUCTS);
    }
  }, [state.proposal.id, state.proposal.type]);

  const dispatchHandlerSelected = data => {
    dispatch(CHECKED_PRODUCTS, { checked: data });
  };

  const searchLineItem = event => {
    setSearchedLineItem(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Paper className={classes.content}>
      <SearchInput
        className={classes.searchInput}
        onChange={searchLineItem}
        placeholder="Search Line Item..."
      />
      <Table
        checked={state.products.checked}
        dispatch={dispatchHandlerSelected}
        headers={proposalCart}
        lineItems={state.products.lineItems}
        options={tableOptions}
        searchedLineItem={searchedLineItem}
        title="Products Selected"
      />
    </Paper>
  );
};

export default Products;
