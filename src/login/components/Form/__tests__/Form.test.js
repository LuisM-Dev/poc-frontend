import React from 'react';
import Form from '../Form';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Login Form Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render email input correctly', () => {
    const component = findElement('form-email-input');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render password input correctly', () => {
    const component = findElement('form-password-input');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render sign in button correctly', () => {
    const component = findElement('form-signIn-button');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render email label correctly', () => {
    const component = findElement('form-email-label');
    expect(
      component
        .hostNodes()
        .text()
        .includes('Email address')
    ).toBeTruthy();
  });

  it('should render password label correctly', () => {
    const component = findElement('form-password-label');
    expect(
      component
        .hostNodes()
        .text()
        .includes('Password')
    ).toBeTruthy();
  });

  it('should render sign in label correctly', () => {
    const component = findElement('form-signIn-button');
    expect(component.hostNodes().text()).toBe('Sign In');
  });

  it('should email text be displayed correctly', () => {
    let component = findElement('form-email-input');
    component.simulate('change', {
      target: { name: 'email', value: 'abc' }
    });
    wrapper.update();
    component = findElement('form-email-input');
    expect(component.props().value).toEqual('abc');
  });

  it('should password text be displayed correctly', () => {
    let component = findElement('form-password-input');
    component.simulate('change', {
      target: { name: 'password', value: 'abc' }
    });
    wrapper.update();
    component = findElement('form-password-input');
    expect(component.props().value).toEqual('abc');
  });

  it('should form be submitted correctly', () => {
    const submitMock = jest.fn();
    let component = findElement('form-submit');
    component.hostNodes().simulate('submit', {
      preventDefault: submitMock
    });
    wrapper.update();
    expect(submitMock).toHaveBeenCalled();
  });
});
