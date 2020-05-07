import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './SearchInputStyle';

const SearchInput = props => {
  const { onChange, placeholder } = props;
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    onChange(searchText);
  }, [searchText]);

  const handleOnSearch = event => {
    setSearchText(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      <SearchIcon className={classes.icon} data-test={'search-input-icon'} />
      <Input
        className={classes.input}
        data-test={'search'}
        disableUnderline
        inputProps={{ 'data-test': 'search-input' }}
        margin="dense"
        onChange={handleOnSearch}
        placeholder={placeholder}
        value={searchText}
      />
      {/*<Button color="secondary" data-test="search-button" variant="contained">*/}
      {/*  Search*/}
      {/*</Button>*/}
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default SearchInput;
