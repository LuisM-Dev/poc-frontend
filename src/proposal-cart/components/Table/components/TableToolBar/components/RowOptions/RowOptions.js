import React, { useState } from 'react';
import { Visibility as VisibilityIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Option from './components';
import { Dialog } from '../../../../../Dialog';

const RowOptions = props => {
  const { id } = props;
  const [open, setOpen] = useState(false);

  const viewHandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Dialog
          body={'Show and edit relevant information for the product'}
          handleClose={handleClose}
          open={open}
          title={id}
        />
      )}
      <Option
        ariaLabel={'view'}
        dataTest={'rowOptions-view'}
        icon={<VisibilityIcon />}
        onClick={viewHandler}
        title={'View'}
      />
    </>
  );
};

RowOptions.propTypes = {
  id: PropTypes.string
};

export default RowOptions;
