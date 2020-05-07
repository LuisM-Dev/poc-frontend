import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import StepIcon from './components';

import { useStore } from '../../store';

import { proposalSteps } from '../../admin';

import useStyles from './StepperChevronStyle';

const ColorlibConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 31
  },
  active: {
    '& $line': {
      backgroundColor: theme.palette.ibm.black
    }
  },
  completed: {
    '& $line': {
      backgroundColor: theme.palette.ibm.blue
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
}))(StepConnector);

const StepperChevron = () => {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={0}
      alternativeLabel
      className={classes.stepper}
      connector={<ColorlibConnector />}>
      {proposalSteps.map(step => (
        <Step key={step.label}>
          <StepLabel
            data-test={'step-label'}
            StepIconComponent={stepEvent => (
              <StepIcon icon={step.icon} stepEvent={stepEvent} />
            )}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

StepperChevron.propTypes = {
  steps: PropTypes.array
};

export default StepperChevron;
