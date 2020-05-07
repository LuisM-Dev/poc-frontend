import React, { useState } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

import InputField from '../InputField';
import useStyles from './SectionStyle';
import { useStore } from '../../store';

const Section = props => {
  const { title, fields } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const state = useStore()[0];

  const expandHandler = () => {
    setExpanded(prev => !prev);
  };

  const createHeader = () => {
    const headersAllowed = Object.keys(state.proposal.fields);
    return fields
      .filter(field => headersAllowed.includes(field.value))
      .map(allowedField => (
        <Grid data-test={'section-field'} item key={allowedField.label} xs={4}>
          <InputField
            id={allowedField.value}
            label={allowedField.label}
            required={allowedField.required}
            type={allowedField.type}
          />
        </Grid>
      ));
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        data-test={'section'}
        expanded={expanded}
        onChange={expandHandler}>
        <ExpansionPanelSummary
          className={classes.headingContainer}
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header">
          <Typography
            className={classes.heading}
            component="h5"
            data-test={'section-title'}
            variant="h6">
            {title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            {createHeader()}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

Section.propTypes = {
  fields: PropTypes.array,
  title: PropTypes.string
};

export default Section;
