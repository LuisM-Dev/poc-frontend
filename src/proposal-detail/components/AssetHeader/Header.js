import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import InputField from '../InputField';
import Loading from '../Loading';

import useStyles from './HeaderStyle';
import { useStore } from '../../store';

const Header = () => {
  const classes = useStyles();
  const state = useStore()[0];

  return (
    <Paper className={classes.root}>
      {state.searching.status ? (
        <Loading />
      ) : (
        <Grid alignItems="center" container justify="space-between">
          <Grid item xs={6}>
            <Grid container justify="space-evenly" spacing={3}>
              <Grid item xs={4}>
                <InputField
                  id="installedCustomerNumber"
                  label="Installed Customer Number"
                  store="asset"
                />
              </Grid>
              <Grid item xs={2}>
                <InputField id="type" label="Type" store="asset" />
              </Grid>
              <Grid item xs={2}>
                <InputField id="model" label="Model" store="asset" />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  id="assetSerialNumber"
                  label="Asset Serial Number"
                  store="asset"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container justify="space-evenly">
              <Grid item xs={3}>
                <InputField
                  color="primary"
                  label={'Search'}
                  type={'button'}
                  variant="contained"
                />
              </Grid>
              <Grid item xs={3}>
                <InputField
                  color="secondary"
                  label={'Upload'}
                  type={'button'}
                  variant="contained"
                />
              </Grid>
              <Grid item xs={3}>
                <InputField
                  color="secondary"
                  label={'eConfig'}
                  type={'button'}
                  variant="contained"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default Header;
