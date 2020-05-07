import React from 'react';
import clsx from 'clsx';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';

import useStyles from './StepIconStyle';

const StepIcon = props => {
  const classes = useStyles();
  const { stepEvent, icon } = props;
  const { active, completed } = stepEvent;

  return (
    <div
      data-test={'step-icon'}
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}>
      {completed ? <DoneIcon data-test={'step-icon-done'} /> : icon}
    </div>
  );
};

StepIcon.propTypes = {
  icon: PropTypes.node,
  stepEvent: PropTypes.object
};

export default StepIcon;
