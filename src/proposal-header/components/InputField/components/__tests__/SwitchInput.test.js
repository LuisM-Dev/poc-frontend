import React from 'react';
import { act } from 'react-dom/test-utils';
import Switch from '@material-ui/core/Switch';
import SwitchInput from '../SwitchInput';
import theme from '../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../../store/stores';

proposalStore();

describe('Switch Input Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const mockInputField = { id: 'demoId', label: 'Demo' };

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <SwitchInput {...mockInputField} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should switch render correctly', () => {
    const component = findElement('switch-field');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render switch field label correctly', () => {
    const component = findElement('switch-field');
    expect(component.hostNodes().text()).toContain('Demo');
  });

  it('should switch correctly', () => {
    let component = wrapper.find(Switch);
    act(() => {
      component.props().onChange({ target: { checked: true } });
    });
    wrapper.update();
    component = wrapper.find(Switch);
    expect(component.props().value).toBe('checked');
  });
});
