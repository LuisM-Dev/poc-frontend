import React from 'react';
import StepIcon from '../StepIcon';
import theme from '../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { Subject as SubjectIcon } from '@material-ui/icons';

describe('Step Icon Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <StepIcon
          {...{
            stepEvent: { completed: false, active: true },
            icon: <SubjectIcon data-test={'step-icon-header'} />
          }}
        />
      </ThemeProvider>
    );
    expect(wrapper).toBeTruthy();
  });

  it('should render custom icon correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <StepIcon
          {...{
            stepEvent: { completed: false, active: true },
            icon: <SubjectIcon data-test={'step-icon-header'} />
          }}
        />
      </ThemeProvider>
    );
    const component = findElement('step-icon-header');
    expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render done icon correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <StepIcon
          {...{
            stepEvent: { completed: true, active: true },
            icon: <SubjectIcon />
          }}
        />
      </ThemeProvider>
    );
    const component = findElement('step-icon-done');
    expect(component.hostNodes()).toHaveLength(1);
  });
});
