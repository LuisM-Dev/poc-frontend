import React from 'react';
import Header from '../Header';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Login Header Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render title correctly', () => {
    const component = findElement('login-title');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render title text correctly', () => {
    const component = findElement('login-title');
    expect(component.hostNodes().text()).toEqual('Sign in');
  });

  it('should render icon correctly', () => {
    const component = findElement('login-icon');
    expect(component.hostNodes()).toHaveLength(1);
  });
});
