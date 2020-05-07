import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

import Table from '../Table';

import { useStore, SAVE_FIELD, SAVE_ASSET, GET_ASSET } from '../../store';

import { proposalDetails } from '../../admin';

import useStyles from './AssetStyle';

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const Asset = () => {
  const [state, dispatch] = useStore();
  const classes = useStyles();

  useEffect(() => {
    dispatch(GET_ASSET);
  }, [state.proposal.id]);

  const handleCheckedSelected = () => {
    dispatch(SAVE_ASSET, {
      selected: state.asset.selected.concat(state.asset.searchedChecked)
    });
    dispatch(SAVE_ASSET, {
      searched: not(state.asset.searched, state.asset.searchedChecked)
    });
    dispatch(SAVE_ASSET, {
      searchedChecked: not(
        state.asset.selectedChecked,
        state.asset.searchedChecked
      )
    });
  };

  const handleCheckedSearched = () => {
    dispatch(SAVE_ASSET, {
      searched: state.asset.searched.concat(state.asset.selectedChecked)
    });
    dispatch(SAVE_ASSET, {
      selected: not(state.asset.selected, state.asset.selectedChecked)
    });
    dispatch(SAVE_ASSET, {
      selectedChecked: not(
        state.asset.searchedChecked,
        state.asset.selectedChecked
      )
    });
  };

  const dispatchHandlerSearched = data => {
    dispatch(SAVE_ASSET, { searchedChecked: data });
  };

  const dispatchHandlerSelected = data => {
    dispatch(SAVE_ASSET, { selectedChecked: data });
  };

  const assetTable = (title, data) => {
    let headers = proposalDetails;
    let checked = 'searchedChecked';
    let dispatchHandler = dispatchHandlerSearched;
    if (title === 'Assets Selected') {
      headers = [proposalDetails[0]];
      checked = 'selectedChecked';
      dispatchHandler = dispatchHandlerSelected;
    }
    return (
      <Table
        checked={state.asset[checked]}
        dispatch={dispatchHandler}
        headers={headers}
        rows={data}
        state={state.asset}
        title={title}
      />
    );
  };

  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      justify="space-between">
      <Grid item xs={8}>
        <Paper>{assetTable('Assets Found', state.asset.searched)}</Paper>
      </Grid>
      <Grid item xs={1}>
        <Grid alignItems="center" container direction="column">
          <Button
            className={classes.button}
            disabled={
              !state.edit.status || state.asset.searchedChecked.length === 0
            }
            onClick={handleCheckedSelected}
            size="small"
            variant="outlined">
            &gt;
          </Button>
          <Button
            className={classes.button}
            disabled={
              !state.edit.status || state.asset.selectedChecked.length === 0
            }
            onClick={handleCheckedSearched}
            size="small"
            variant="outlined">
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Paper>{assetTable('Assets Selected', state.asset.selected)}</Paper>
      </Grid>
    </Grid>
  );
};

export default Asset;
