import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Login from './views/Login/Login';

import theme from './theme';
import './index.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
