import React from 'react';
import Login from '../Login';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Login Form Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render login header correctly', () => {
    const component = findElement('login-title');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render login form correctly', () => {
    const component = findElement('form-email-label');
    expect(component.hostNodes()).toHaveLength(1);
  });
});
