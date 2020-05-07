import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import './index.scss';

import ProposalDetail from './views/ProposalDetail';

import { assetStore } from './store/stores';

assetStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProposalDetail />
    </ThemeProvider>
  );
};

export default App;
