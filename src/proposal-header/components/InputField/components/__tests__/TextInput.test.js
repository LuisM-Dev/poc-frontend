import React from 'react';
import { act } from 'react-dom/test-utils';
import TextField from '@material-ui/core/TextField';
import TextInput from '../TextInput';
import theme from '../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../../store/stores';

proposalStore();

describe('Text Input Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const mockInputField = { id: 'demoId', label: 'Demo' };

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <TextInput {...mockInputField} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should text field render correctly', () => {
    const component = findElement('text-field');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render text field label correctly', () => {
    const component = findElement('text-field');
    expect(component.hostNodes().text()).toContain('Demo');
  });

  it('should change text correctly', () => {
    let component = wrapper.find(TextField);
    act(() => {
      component.props().onChange({ target: { value: 'abc' } });
    });
    wrapper.update();
    component = wrapper.find(TextField);
    expect(component.props().value).toBe('abc');
  });

  it('should render error text field correctly', () => {
    const component = findElement(TextField);
    expect(component.hostNodes().text()).toContain('Demo');
  });
});
