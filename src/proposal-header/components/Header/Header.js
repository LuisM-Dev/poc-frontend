import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './HeaderStyle';

const Header = props => {
  const { className, id, type, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, classes.row, className)}>
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography
            component="h2"
            data-test={'header-preTitle'}
            gutterBottom
            variant="overline">
            {'PROPOSAL - ' + type}
          </Typography>
          <Typography component="h3" data-test={'header-title'} variant="h3">
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
