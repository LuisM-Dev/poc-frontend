import React, { Suspense } from 'react';
import clsx from 'clsx';
import { LinearProgress, Paper, useMediaQuery } from '@material-ui/core';
import { Header, Sidebar, TableTabs, Topbar } from '../../components';
import theme from '../../theme';
import useStyles from './ProposalsStyle';

const Proposals = () => {
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
        <main>
          <Suspense fallback={<LinearProgress />}>
            <div className={classes.proposalsRoot}>
              <Header />
              <Paper>
                <TableTabs />
              </Paper>
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Proposals;
