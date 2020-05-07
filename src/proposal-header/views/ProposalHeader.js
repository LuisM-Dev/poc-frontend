import React, { Suspense, useEffect } from 'react';
import { LinearProgress, Paper, useMediaQuery } from '@material-ui/core';
import {
  Header,
  StepperChevron,
  Footer,
  Section,
  Topbar,
  Sidebar,
  ProposalTypeSelection
} from '../components';

import { useStore } from '../store';

import { proposalSteps, proposalHeaders } from '../admin';

import useStyles from './ProposalHeaderStyle';
import clsx from 'clsx';
import theme from '../theme';

const ProposalHeader = () => {
  const state = useStore()[0];
  const classes = useStyles();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const createHeadersSection = () => {
    return proposalHeaders.map(section => (
      <Section key={section.title} {...section} />
    ));
  };

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
              {state.proposal.id ? (
                <>
                  <Header id={state.proposal.id} type={state.proposal.type} />
                  <Paper>
                    <StepperChevron steps={proposalSteps} />
                    <div className={classes.proposalContent}>
                      {createHeadersSection()}
                      <Footer />
                    </div>
                  </Paper>
                </>
              ) : (
                <ProposalTypeSelection />
              )}
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default ProposalHeader;
