import React from 'react';
import Header from '../Header';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Login Form Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header id={'P-0001'} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render pre-title correctly', () => {
    const component = findElement('header-preTitle');
    expect(component).toHaveLength(1);
  });

  it('should render proposal ID correctly', () => {
    const component = findElement('header-title');
    expect(component).toHaveLength(1);
  });

  it('should render pre-title text correctly', () => {
    const component = findElement('header-preTitle');
    expect(component.text()).toBe('PROPOSAL');
  });

  it('should render proposal ID text correctly', () => {
    const component = findElement('header-title');
    expect(component.text()).toBe('P-0001');
  });
});
