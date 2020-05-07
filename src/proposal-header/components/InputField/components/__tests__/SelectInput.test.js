import React from 'react';
import { act } from 'react-dom/test-utils';
import TextField from '@material-ui/core/TextField';
import SelectInput from '../SelectInput';
import theme from '../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../../store/stores';

proposalStore();

describe('Select Input Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const mockInputField = {
    id: 'demoId',
    label: 'Demo',
    options: [
      { label: '', value: '' },
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]
  };

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <SelectInput {...mockInputField} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render select correctly', () => {
    const component = findElement('select-field');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render select field label correctly', () => {
    const component = findElement('select-field');
    expect(component.hostNodes().text()).toContain('Demo');
  });

  it('should select correctly', () => {
    let component = wrapper.find(TextField);
    act(() => {
      component.props().onChange({ target: { value: '1' } });
    });
    wrapper.update();
    component = wrapper.find(TextField);
    expect(component.props().value).toBe('1');
  });
});
