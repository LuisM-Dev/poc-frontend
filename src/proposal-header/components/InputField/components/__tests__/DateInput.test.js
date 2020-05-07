import React from 'react';
import { act } from 'react-dom/test-utils';
import TextField from '@material-ui/core/TextField';
import DateInput from '../DateInput';
import theme from '../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../../store/stores';

proposalStore();

describe('Date Input Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const mockInputField = {
    id: 'demoId',
    label: 'Demo'
  };

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <DateInput {...mockInputField} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render date correctly', () => {
    const component = findElement('date-field');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render date field label correctly', () => {
    const component = findElement('date-field');
    expect(component.hostNodes().text()).toContain('Demo');
  });

  it('should select date correctly', () => {
    let component = wrapper.find(TextField);
    act(() => {
      component.props().onChange({ target: { value: '11/22/2019' } });
    });
    wrapper.update();
    component = wrapper.find(TextField);
    expect(component.props().value).toBe('11/22/2019');
  });
});
