import React, {Suspense} from "react";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery, LinearProgress } from '@material-ui/core';
import { Chart } from 'react-chartjs-2';
import clsx from "clsx";
import { chartjs } from './helpers';

import theme from "./theme";
import "./index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

import Dashboard from './views/Dashboard';
import {Topbar,Sidebar} from './components';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  logo: {
    color: theme.palette.primary.contrastText
  }
}));

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

const App = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <div
          className={clsx({
            [classes.root]: true,
            [classes.shiftContent]: isDesktop
          })}
        >
          <Topbar />
          <Sidebar
            open
            variant={isDesktop ? "persistent" : "temporary"}
          />
          <main className={classes.content}>
            <Suspense fallback={<LinearProgress />}>
              <Dashboard />
            </Suspense>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
