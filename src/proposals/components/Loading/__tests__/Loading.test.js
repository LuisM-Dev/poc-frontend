import React from 'react';
import Loading from '../Loading';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Loading Component', () => {
  let mount;
  let wrapper;

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });
});
