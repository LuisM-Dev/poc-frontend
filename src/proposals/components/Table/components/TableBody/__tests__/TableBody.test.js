import React from 'react';
import TableBody from '../TableBody';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { tableColumns } from '../../../../../admin';

describe('Table Body Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();
  let mockSelectOne;
  let mockSelectAll;

  beforeEach(() => {
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
            columns: tableColumns,
            data: [
              { id: 'P-001', account: 'account 1' },
              { id: 'P-002', account: 'account 2' }
            ],
            rowsPerPage: 10,
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

  it('should render table header correctly', () => {
    const component = findElement('table-row-header');
    expect(component).toHaveLength(1);
  });

  it('should render table header checkbox correctly', () => {
    const component = findElement('table-row-header-checkbox');
    expect(component).toHaveLength(1);
  });

  it('should render table header columns correctly', () => {
    const component = findElement('table-row-header-column');
    expect(component).toHaveLength(tableColumns.length);
  });

  it('should render table rows correctly', () => {
    const component = findElement('table-row-data');
    expect(component).toHaveLength(2);
  });

  it('should render table row checkbox correctly', () => {
    const component = findElement('table-row-data-checkbox');
    expect(component).toHaveLength(2);
  });

  it('should render table row data correctly', () => {
    const component = findElement('table-row-data-content');
    expect(component).toHaveLength(tableColumns.length * 2);
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
