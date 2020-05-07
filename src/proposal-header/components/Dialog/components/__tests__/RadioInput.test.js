import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../../theme';
import { RadioInput } from '../index';

describe('Dialog Radio Input Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <RadioInput handleChange={jest.fn} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render options correctly', () => {
    const component = findElement('radioInput-option');
    expect(component).toHaveLength(2);
  });

  it('should render options names correctly', () => {
    const component = findElement('radioInput-option');
    const options = [
      'TSS Distributor Transactional',
      'TSS Direct Transactional'
    ];
    component.forEach((option, index) => {
      const optionLabel = option.props().children[0].props.value;
      expect(optionLabel).toBe(options[index]);
    });
  });
});
