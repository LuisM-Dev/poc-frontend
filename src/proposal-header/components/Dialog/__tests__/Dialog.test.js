import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../theme';
import DialogInput from '../Dialog';

describe('Dialog Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <DialogInput />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render dialog title correctly', () => {
    const component = findElement('dialogInput-title');
    expect(component.text()).toBe('Select Proposal Type');
  });

  it('should render cancel button correctly', () => {
    const component = findElement('dialogInput-button-cancel');
    expect(component.text()).toBe('Cancel');
    expect(component).toHaveLength(1);
  });

  it('should render next button correctly', () => {
    const component = findElement('dialogInput-button-next');
    expect(component.text()).toBe('Next');
    expect(component).toHaveLength(1);
  });

  it('should handle cancel click event', () => {
    window.history.pushState = jest.fn();
    const component = findElement('dialogInput-button-cancel');
    component.simulate('click');
    expect(window.history.pushState).toHaveBeenCalledWith(
      null,
      null,
      '/proposals/all'
    );
  });

  it('should handle next click event', () => {
    const component = findElement('dialogInput-button-next');
    component.simulate('click');
    wrapper.update();
    // test the dispatch
  });
});
