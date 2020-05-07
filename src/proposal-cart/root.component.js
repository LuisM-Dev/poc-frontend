import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import './index.scss';

import ProposalCart from './views/ProposalCart';

import { productsStore } from './store/stores';

productsStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProposalCart />
    </ThemeProvider>
  );
};

export default App;
