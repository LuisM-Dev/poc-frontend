import React from 'react';
import RowOptions from '../RowOptions';
import theme from '../../../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Row Options Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <RowOptions proposalId="P-000000" />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render view option correctly', () => {
    const component = findElement('rowOptions-view');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render clone option correctly', () => {
    const component = findElement('rowOptions-clone');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render change owner option correctly', () => {
    const component = findElement('rowOptions-changeOwner');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render delete option correctly', () => {
    const component = findElement('rowOptions-delete');
    expect(component.hostNodes()).toHaveLength(1);
  });
});
