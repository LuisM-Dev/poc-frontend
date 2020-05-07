import React, { Suspense } from 'react';
import { LinearProgress, Paper, useMediaQuery } from '@material-ui/core';
import {
  Header,
  StepperChevron,
  Asset,
  AssetHeader,
  Footer,
  Topbar,
  Sidebar
} from '../components';

import { proposalSteps } from '../admin';

import useStyles from './ProposalDetailStyle';
import clsx from 'clsx';
import theme from '../theme';

const ProposalDetail = () => {
  const classes = useStyles();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div className={classes.content}>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop
        })}>
        <Topbar />
        <Sidebar open variant={isDesktop ? 'persistent' : 'temporary'} />
        <main className={classes.proposalContent}>
          <Suspense fallback={<LinearProgress />}>
            <div className={classes.proposalRoot}>
              {window.history.state && (
                <>
                  <Header
                    id={window.history.state.id}
                    type={window.history.state.type}
                  />
                  <Paper>
                    <StepperChevron steps={proposalSteps} />
                    <div className={classes.proposalContent}>
                      <AssetHeader />
                      <Asset />
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

export default ProposalDetail;
