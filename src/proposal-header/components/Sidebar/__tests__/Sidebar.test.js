import React from 'react';
import Sidebar from '../Sidebar';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Sidebar Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Sidebar variant={'persistent'} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render profile correctly', () => {
    const component = findElement('sidebar-profile');
    expect(component.hostNodes()).toBeTruthy();
  });

  it('should render divider correctly', () => {
    const component = findElement('sidebar-divider');
    expect(component.hostNodes()).toBeTruthy();
  });

  it('should render nav menu correctly', () => {
    const component = findElement('sidebar-items');
    expect(component.hostNodes()).toBeTruthy();
  });
});
