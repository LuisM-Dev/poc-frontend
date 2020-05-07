import React from 'react';
import Table from '../Table';
import { act } from 'react-dom/test-utils';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { TableBody } from '../components';
import { TablePagination } from '@material-ui/core';
import { tableColumns } from '../../../admin';

const proposals = [
  { id: 'P-001', account: 'account 1' },
  { id: 'P-002', account: 'account 2' },
  { id: 'P-003', account: 'account 2' },
  { id: 'P-004', account: 'account 2' },
  { id: 'P-005', account: 'account 2' },
  { id: 'P-006', account: 'account 2' },
  { id: 'P-007', account: 'account 2' },
  { id: 'P-008', account: 'account 2' },
  { id: 'P-009', account: 'account 2' },
  { id: 'P-0010', account: 'account 2' },
  { id: 'P-0011', account: 'account 2' }
];

describe('Table Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const findElementHostNodes = element => findElement(element).hostNodes();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Table
          {...{
            title: 'demo',
            data: proposals.slice(0, 2),
            columns: tableColumns,
            searchedProposal: ''
          }}
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render table toolbar correctly', () => {
    const component = findElementHostNodes('tableToolbar-title');
    expect(component).toHaveLength(1);
  });

  it('should render table header correctly', () => {
    const component = findElementHostNodes('table-row-header');
    expect(component).toHaveLength(1);
  });

  it('should render table pagination correctly', () => {
    const component = findElementHostNodes('table-pagination');
    expect(component).toHaveLength(1);
  });

  it('should start without checked proposals correctly', () => {
    const component = wrapper.find(TableBody);
    expect(component.props().checked).toHaveLength(0);
  });

  it('should check proposal correctly', () => {
    let component = findElement('table-row-data');
    component.at(0).simulate('click');
    component = wrapper.find(TableBody);
    expect(component.props().checked).toHaveLength(1);
  });

  it('should check 2 proposals correctly', () => {
    let component = findElement('table-row-data');
    component.forEach(row => {
      row.simulate('click');
      wrapper.update();
    });
    component = wrapper.find(TableBody);
    expect(component.props().checked).toHaveLength(2);
  });

  it('should check all proposals correctly', () => {
    let component = findElement('table-header-column-checkbox');
    component.at(0).simulate('change', { target: { checked: true } });
    component = wrapper.find(TableBody);
    expect(component.props().checked).toHaveLength(2);
  });

  it('should display number of proposals checked correctly', () => {
    let component = findElementHostNodes('table-header-column-checkbox');
    component.at(0).simulate('change', { target: { checked: true } });
    component = findElementHostNodes('tableToolbar-selected-title');
    expect(component.text()).toBe('2 selected');
  });

  it('should default 10 rows per page setting correctly', () => {
    let component = wrapper.find(TablePagination);
    expect(component.props().rowsPerPage).toBe(10);
  });

  it('should change to 5 rows per page setting correctly', () => {
    let component = wrapper.find(TablePagination);
    act(() => {
      component.props().onChangeRowsPerPage({ target: { value: 5 } });
    });
    wrapper.update();
    component = wrapper.find(TablePagination);
    expect(component.props().rowsPerPage).toBe(5);
  });

  it('should change page correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Table
          {...{
            title: 'demo',
            data: proposals,
            columns: tableColumns,
            searchedProposal: ''
          }}
        />
      </ThemeProvider>
    );
    let component = wrapper.find(TablePagination);
    act(() => {
      component.props().onChangePage({}, 1);
    });
    wrapper.update();
    component = wrapper.find(TablePagination);
    expect(component.props().page).toBe(1);
  });
});
