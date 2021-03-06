import React from 'react';
import TableToolbar from '../TableToolbar';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Table Toolbar Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [] }} />
      </ThemeProvider>
    );
    expect(wrapper).toBeTruthy();
  });

  it('should render table title correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [] }} />
      </ThemeProvider>
    );
    const component = findElement('tableToolbar-title');
    expect(component.hostNodes().text()).toEqual('table');
  });

  it('should render selected title correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [{}, {}] }} />
      </ThemeProvider>
    );
    const component = findElement('tableToolbar-selected-title');
    expect(component.hostNodes().text()).toEqual('2 selected');
  });

  it('should render table options correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [] }} />
      </ThemeProvider>
    );
    const component = findElement('tableOptions-icon');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render row options correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [{}] }} />
      </ThemeProvider>
    );
    const component = findElement('rowOptions-view');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render table options more than 1 row selected correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableToolbar {...{ title: 'table', selected: [{}, {}] }} />
      </ThemeProvider>
    );
    const component = findElement('tableOptions-icon');
    expect(component.hostNodes()).toHaveLength(1);
  });
});
