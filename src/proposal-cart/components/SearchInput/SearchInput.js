import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Input, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchInputStyle';

const SearchInput = props => {
  const { onChange, placeholder } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <SearchIcon className={classes.icon} />
      <Input
        className={classes.input}
        disableUnderline
        margin="dense"
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button color="secondary" variant="contained">
        Search
      </Button>
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
