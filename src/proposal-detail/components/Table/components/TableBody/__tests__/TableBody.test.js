import React from 'react';
import TableBody from '../TableBody';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { tableColumns } from '../../../../../admin';

describe('Table Body Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  let mockSelectOne;
  let mockSelectAll;

  beforeAll(() => {
    mount = createMount();
    mockSelectOne = jest.fn();
    mockSelectAll = jest.fn();

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableBody
          {...{
            checked: [],
            handleSelectOne: mockSelectOne,
            handleSelectAll: mockSelectAll,
            rows: [
              { id: 'P-001', account: 'account 1' },
              { id: 'P-002', account: 'account 2' }
            ],
            rowsPerPage: 10
          }}
        />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render table header correctly', () => {
    const component = findElement('table-header-column');
    expect(component.hostNodes().length).toBeGreaterThan(0);
  });

  it('should render table rows correctly', () => {
    const component = findElement('table-row-data');
    expect(component.hostNodes().length).toBeGreaterThan(0);
  });

  it('should render table header columns correctly', () => {
    const component = findElement('table-header-column');
    expect(component.hostNodes()).toHaveLength(tableColumns.length);
  });

  it('should render table rows content correctly', () => {
    const component = findElement('table-row-data');
    expect(component.hostNodes()).toHaveLength(2);
  });

  it('should checked one row work correctly', () => {
    const component = findElement('table-row-data');
    component.at(0).simulate('click');
    expect(mockSelectOne).toHaveBeenCalled();
  });

  it('should checked all rows work correctly', () => {
    const component = findElement('table-header-column-checkbox');
    component.at(0).simulate('change');
    expect(mockSelectAll).toHaveBeenCalled();
  });
});
