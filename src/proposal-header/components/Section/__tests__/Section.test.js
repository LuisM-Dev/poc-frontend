import React from 'react';
import { act } from 'react-dom/test-utils';
import { ExpansionPanel } from '@material-ui/core';
import Section from '../Section';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../store/stores';

proposalStore();

describe('Section Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const mockSection = {
    title: 'mock',
    fields: [
      { label: 'Mock Field', value: 'mockField' },
      { label: 'Mock Field 2', value: 'mockField2' }
    ]
  };

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Section {...mockSection} />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render section correctly', () => {
    const component = findElement('section');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render section title correctly', () => {
    const component = findElement('section-title');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render section title text correctly', () => {
    const component = findElement('section-title');
    expect(component.hostNodes().text()).toContain('mock');
  });

  it('should render section input fields correctly', () => {
    const component = findElement('section-field');
    expect(component.hostNodes()).toHaveLength(mockSection.fields.length);
  });

  it('should contract section correctly', () => {
    let component = wrapper.find(ExpansionPanel);
    act(() => {
      component.props().onChange();
    });
    wrapper.update();
    component = wrapper.find(ExpansionPanel);
    expect(component.props().expanded).toBeFalsy();
  });
});
