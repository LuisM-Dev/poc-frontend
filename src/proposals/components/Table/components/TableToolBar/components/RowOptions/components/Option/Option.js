import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const Option = props => {
  const { ariaLabel, dataTest, title, onClick, icon } = props;

  const handleOnClick = event => {
    onClick(event.target.value);
  };

  return (
    <Tooltip key="view" title={title}>
      <IconButton
        aria-label={ariaLabel}
        data-test={dataTest}
        onClick={handleOnClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
Option.propTypes = {
  ariaLabel: PropTypes.string,
  dataTest: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Option;
