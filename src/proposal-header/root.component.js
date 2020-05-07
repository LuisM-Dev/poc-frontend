import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import './index.scss';
import ProposalHeader from './views/ProposalHeader';

import { proposalStore } from './store';

proposalStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <ProposalHeader />
  </ThemeProvider>
);

export default App;
