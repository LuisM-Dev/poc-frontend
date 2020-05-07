import React from 'react';
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  FileCopy as FileCopyIcon,
  AssignmentInd as AssignmentIndIcon
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import Option from './components';

const RowOptions = props => {
  const { proposalId } = props;

  // const viewHandler = () => {
  //   window.history.pushState(proposalId, null, '/proposals/new');
  // };

  return (
    <>
      <Option
        ariaLabel={'view'}
        dataTest={'rowOptions-view'}
        icon={<VisibilityIcon />}
        // onClick={viewHandler}
        title={'View'}
      />
      <Option
        ariaLabel={'clone'}
        dataTest={'rowOptions-clone'}
        icon={<FileCopyIcon />}
        title={'Clone'}
      />
      <Option
        ariaLabel={'change owner'}
        dataTest={'rowOptions-changeOwner'}
        icon={<AssignmentIndIcon />}
        title={'Change Owner'}
      />
      <Option
        ariaLabel={'delete'}
        dataTest={'rowOptions-delete'}
        icon={<DeleteIcon />}
        title={'Delete'}
      />
    </>
  );
};

RowOptions.propTypes = {
  proposalId: PropTypes.string
};

export default RowOptions;
