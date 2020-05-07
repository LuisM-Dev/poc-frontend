import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import InputField from '../InputField';
import useStyles from './HeaderStyle';
import { useStore, RETRIEVE_PRICES } from '../../store';

const Header = () => {
  const classes = useStyles();
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch(RETRIEVE_PRICES);
  }, []);

  return (
    <Paper className={classes.root}>
      {console.log(state.products.prices.totalMonthly)}
      <Grid alignItems="center" container justify="space-between">
        <Grid item xs={5}>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item xs={3}>
              <InputField
                id="totalMonthly"
                label="Total (Monthly)"
                value={state.products.prices.totalMonthly}
              />
            </Grid>
            <Grid item xs={3}>
              <InputField
                id="totalOneTime"
                label="Total (One Time)"
                value={state.products.prices.totalOneTime}
              />
            </Grid>
            <Grid item xs={3}>
              <InputField
                id="totalYearly"
                label="Total (Yearly)"
                value={state.products.prices.totalYearly}
              />
            </Grid>
            <Grid item xs={3}>
              <InputField
                id="grandTotal"
                label="Grand Total"
                value={state.products.prices.grandTotal}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="space-evenly">
            <Grid item xs={4}>
              <InputField
                color="secondary"
                label={'Mass Update'}
                type={'button'}
                variant="contained"
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                color="secondary"
                label={'Add Products'}
                type={'button'}
                variant="contained"
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                color="primary"
                label={'Update Cart'}
                type={'button'}
                variant="contained"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
