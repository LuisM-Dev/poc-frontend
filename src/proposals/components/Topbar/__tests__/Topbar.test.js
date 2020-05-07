import React from 'react';
import Topbar from '../Topbar';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Sidebar Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Topbar />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render logo correctly', () => {
    const component = findElement('topbar-logo');
    expect(component).toHaveLength(1);
  });

  it('should render logo name correctly', () => {
    const component = findElement('topbar-logo');
    expect(component.text()).toEqual('Refactor Project');
  });
});
