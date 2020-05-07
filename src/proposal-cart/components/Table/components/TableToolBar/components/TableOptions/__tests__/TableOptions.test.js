import React from 'react';
import TableOptions from '../TableOptions';
import theme from '../../../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Table Options Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableOptions />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render menu icon correctly', () => {
    const component = findElement('tableOptions-icon');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render menu title correctly', () => {
    const component = findElement('tableOptions-icon');
    expect(component.hostNodes().props().title).toEqual('More Options');
  });

  it('should render export CSV option correctly', () => {
    const component = findElement('tableOptions-exportCSV');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render print option correctly', () => {
    const component = findElement('tableOptions-print');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('menu should start hidden', () => {
    const component = findElement('tableOptions-menu');
    expect(component.hostNodes().props().style.visibility).toBe('hidden');
  });

  it('should open menu correctly', () => {
    let component = findElement('tableOptions-icon');
    component.hostNodes().simulate('click');
    wrapper.update();
    component = findElement('tableOptions-menu');
    expect(component.hostNodes().props().style.visibility).toBeFalsy();
  });
});
