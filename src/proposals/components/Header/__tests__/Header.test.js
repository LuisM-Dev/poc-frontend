import React from 'react';
import Header from '../Header';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Proposals Header Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render header component correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render pre-title correctly', () => {
    const component = findElement('header-preTitle');
    expect(component).toHaveLength(1);
  });

  it('should render title correctly', () => {
    const component = findElement('header-title');
    expect(component).toHaveLength(1);
  });

  it('should render create new proposal button correctly', () => {
    const component = findElement('header-create-proposal-button');
    expect(component).toHaveLength(1);
  });

  it('should render create new label correctly', () => {
    const component = findElement('header-create-proposal-button');
    expect(component.text()).toEqual('Create New');
  });

  it('should handle create new proposal click event', () => {
    window.history.pushState = jest.fn();
    const component = findElement('header-create-proposal-button');
    component.simulate('click');
    expect(window.history.pushState).toHaveBeenCalledWith(
      null,
      null,
      '/proposals/new'
    );
  });
});
