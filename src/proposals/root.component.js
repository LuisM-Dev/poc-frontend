import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './index.scss';

import Proposals from './views/Proposals';

import { proposalsStore } from './store/stores';

proposalsStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Proposals />
    </ThemeProvider>
  );
};

export default App;
