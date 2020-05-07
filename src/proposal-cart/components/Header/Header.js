import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './HeaderStyle';
import { SAVE_PROPOSAL_ID_TYPE, useStore } from '../../store';

const Header = props => {
  const { className, id, type, ...rest } = props;
  const dispatch = useStore()[1];
  const classes = useStyles();

  useEffect(() => {
    dispatch(SAVE_PROPOSAL_ID_TYPE, { id, type });
  }, []);

  return (
    <div {...rest} className={clsx(classes.root, classes.row, className)}>
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            {'PROPOSAL - ' + type}
          </Typography>
          <Typography component="h3" variant="h3">
            {id}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
