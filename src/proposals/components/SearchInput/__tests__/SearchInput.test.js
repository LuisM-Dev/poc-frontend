import React from 'react';
import SearchInput from '../SearchInput';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

describe('Search Input Component', () => {
  let mount;
  let wrapper;
  const onChangeMock = jest.fn();

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <SearchInput onChange={onChangeMock} placeholder={'some placeholder'} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render input correctly', () => {
    const component = findElement('search');
    expect(component).toHaveLength(1);
  });

  it('should render input icon correctly', () => {
    const component = findElement('search-input-icon');
    expect(component).toHaveLength(1);
  });

  it('should render search input correctly', () => {
    const component = findElement('search-input');
    expect(component).toHaveLength(1);
  });

  it('should render search input placeholder correctly', () => {
    const component = findElement('search-input');
    expect(component.props().placeholder).toEqual('some placeholder');
  });

  it('should handle onChange event correctly', () => {
    const event = {
      target: { value: 'some value' }
    };
    const component = findElement('search-input');
    component.simulate('change', event);
    expect(onChangeMock).toBeCalledWith('some value');
  });

  it('should searched text be displayed correctly', () => {
    let component = findElement('search-input');
    const event = {
      target: { value: 'some value' }
    };
    component.simulate('change', event);
    wrapper.update();
    component = findElement('search-input');
    expect(component.props().value).toEqual('some value');
  });
});
