import React from 'react';
import Sidebar from '../Sidebar';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { Divider } from '@material-ui/core';

describe('Sidebar Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Sidebar variant={'persistent'} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render profile correctly', () => {
    const component = findElement('sidebar-profile');
    expect(component).toHaveLength(1);
  });

  it('should render divider correctly', () => {
    const component = wrapper.find(Divider);
    expect(component).toHaveLength(1);
  });

  it('should render nav menu correctly', () => {
    const component = findElement('sidebar-items');
    expect(component).toHaveLength(1);
  });
});
