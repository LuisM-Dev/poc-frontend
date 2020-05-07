import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button, Grid, Typography } from '@material-ui/core';

import { Add as AddIcon } from '@material-ui/icons';

import useStyles from './HeaderStyle';

const Header = () => {
  const classes = useStyles();

  const newProposalHandler = () => {
    window.history.pushState(null, null, '/proposals/new');
  };

  return (
    <div className={clsx(classes.root, classes.row)}>
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography
            component="h2"
            data-test="header-preTitle"
            gutterBottom
            variant="overline">
            MANAGEMENT
          </Typography>
          <Typography component="h3" data-test="header-title" variant="h3">
            All Proposals
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            data-test="header-create-proposal-button"
            onClick={newProposalHandler}
            variant="contained">
            <AddIcon className={classes.icon} />
            Create New
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
