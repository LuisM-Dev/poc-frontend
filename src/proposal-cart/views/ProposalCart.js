import React, { Suspense, useEffect } from 'react';
import { LinearProgress, Paper, useMediaQuery } from '@material-ui/core';
import {
  Header,
  StepperChevron,
  Footer,
  Cart,
  CartHeader,
  Topbar,
  Sidebar,
  Loading
} from '../components';

import { useStore, LOADING_BAR, SEARCH_PRODUCTS } from '../store';

import { proposalSteps } from '../admin';

import useStyles from './ProposalCartStyle';
import clsx from 'clsx';
import theme from '../theme';

const ProposalCart = () => {
  const [state, dispatch] = useStore();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  useEffect(() => {
    dispatch(LOADING_BAR, true);
    if (state.proposal.id && state.proposal.type) {
      dispatch(SEARCH_PRODUCTS);
    }
  }, []);

  return (
    <div className={classes.content}>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop
        })}>
        <Topbar />
        <Sidebar open variant={isDesktop ? 'persistent' : 'temporary'} />
        <main className={classes.contentProposal}>
          <Suspense fallback={<LinearProgress />}>
            <div className={classes.rootProposal}>
              {window.history.state && (
                <>
                  <Header
                    id={window.history.state.id}
                    type={window.history.state.type}
                  />
                  <Paper>
                    <div>
                      <StepperChevron steps={proposalSteps} />
                      {state.searching.status ? (
                        <Loading />
                      ) : (
                        <div className={classes.contentProposal}>
                          <CartHeader />
                          <Cart />
                        </div>
                      )}
                      <Footer />
                    </div>
                  </Paper>
                </>
              )}
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default ProposalCart;
