import React from 'react';
import StepperChevron from '../StepperChevron';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { proposalSteps } from '../../../admin';

import { proposalStore } from '../../../store/stores';

proposalStore();

describe('StepperChevron Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <StepperChevron />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render steps correctly', () => {
    const component = findElement('step-label');
    expect(component.hostNodes().length).toBeGreaterThan(0);
  });

  it('should render number of steps correctly', () => {
    const component = findElement('step-label');
    expect(component.hostNodes()).toHaveLength(proposalSteps.length);
  });
});
