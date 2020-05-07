import React from 'react';
import NavBarItem from '../NavbarItem';
import theme from '../../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import {
  Dashboard as DashboardIcon,
  Description as DescriptionIcon
} from '@material-ui/icons';
import { Collapse } from '@material-ui/core';

describe('NavBar Item Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  const navStub = [
    {
      title: 'Dashboard',
      href: '/dashboard/overview',
      icon: <DashboardIcon />
    },
    {
      title: 'Proposals',
      href: '/proposals',
      icon: <DescriptionIcon />,
      children: [
        { title: 'All Proposals', href: '/proposals/all' },
        { title: 'New Proposal', href: '/proposals/new' }
      ]
    }
  ];

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[0]} />
      </ThemeProvider>
    );
    expect(wrapper).toBeTruthy();
  });

  it('should render nav item correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[0]} />
      </ThemeProvider>
    );
    const component = findElement('sidebar-navItem');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render 2 sub-nav items correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[1]} />
      </ThemeProvider>
    );
    const component = findElement('sidebar-subNavItem');
    expect(component.hostNodes()).toHaveLength(2);
  });

  it('should render render nav item text correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[0]} />
      </ThemeProvider>
    );
    const component = findElement('sidebar-navItem');
    expect(
      component
        .hostNodes()
        .text()
        .includes(navStub[0].title)
    ).toBeTruthy();
  });

  it('should render render 2 sub-nav items text correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[1]} />
      </ThemeProvider>
    );
    const component = findElement('sidebar-subNavItem');
    expect(
      component
        .hostNodes()
        .map((childComponent, index) =>
          childComponent.text().includes(navStub[1].children[index].title)
        )
    ).toEqual([true, true]);
  });

  it('should render expand button correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[1]} />
      </ThemeProvider>
    );
    const component = findElement('sidebar-expand-button');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should expand menu correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBarItem {...navStub[1]} />
      </ThemeProvider>
    );

    let component = findElement('sidebar-navItem');
    component.hostNodes().simulate('click');
    wrapper.update();
    component = wrapper.find(Collapse);
    expect(component.props().in).toBeFalsy();
  });
});
