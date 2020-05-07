import React from 'react';
import Profile from '../Profile';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Profile Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render avatar correctly', () => {
    const component = findElement('profile-avatar');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render user name correctly', () => {
    const component = findElement('profile-username');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render user bio correctly', () => {
    const component = findElement('profile-bio');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render user name text correctly', () => {
    const component = findElement('profile-username');
    expect(
      component
        .hostNodes()
        .text()
        .includes('Luis Mendes')
    ).toBeTruthy();
  });

  it('should render bio name correctly', () => {
    const component = findElement('profile-bio');
    expect(
      component
        .hostNodes()
        .text()
        .includes('IBM Standard User')
    ).toBeTruthy();
  });
});
