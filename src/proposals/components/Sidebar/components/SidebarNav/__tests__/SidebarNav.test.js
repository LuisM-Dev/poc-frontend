import React from 'react';
import SidebarNav from '../SidebarNav';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { navPages } from '../../../../../admin';

describe('Sidebar Nav Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <SidebarNav />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render nav items correctly', () => {
    const component = findElement('sidebar-navItem');
    expect(component).toHaveLength(navPages.length);
  });
});
