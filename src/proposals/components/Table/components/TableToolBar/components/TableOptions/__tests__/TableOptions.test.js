import React from 'react';
import TableOptions from '../TableOptions';
import theme from '../../../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Table Options Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableOptions />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render menu icon correctly', () => {
    const component = findElement('tableOptions-icon');
    expect(component).toHaveLength(1);
  });

  it('should render menu title correctly', () => {
    const component = findElement('tableOptions-icon');
    expect(component.props().title).toEqual('More Options');
  });

  it('should render export CSV option correctly', () => {
    const component = findElement('tableOptions-exportCSV');
    expect(component).toHaveLength(1);
  });

  it('should render print option correctly', () => {
    const component = findElement('tableOptions-print');
    expect(component).toHaveLength(1);
  });

  it('menu should start hidden', () => {
    const component = findElement('tableOptions-menu');
    expect(component.props().style.visibility).toBe('hidden');
  });

  it('should open menu correctly', () => {
    let component = findElement('tableOptions-icon');
    component.simulate('click');
    wrapper.update();
    component = findElement('tableOptions-menu');
    expect(component.props().children[1].props.open).toBeTruthy();
  });

  it('should close menu correctly', () => {
    let component = findElement('tableOptions-icon');
    component.simulate('click');
    wrapper.update();
    component = findElement('tableOptions-exportCSV');
    component.simulate('click');
    wrapper.update();
    component = findElement('tableOptions-menu');
    expect(component.props().children[1].props.open).toBeFalsy();
  });
});
