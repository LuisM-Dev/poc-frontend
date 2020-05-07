import React from 'react';
import ProposalHeader from '../ProposalHeader';
import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import {
  Sidebar,
  Header,
  Topbar,
  StepperChevron,
  Section
} from '../../components';
import { useStore } from '../../store';

describe('Proposals Component', () => {
  let mount;
  let wrapper;

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider store={useStore} theme={theme}>
        <ProposalHeader />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should SideBar correctly', () => {
    const component = wrapper.find(Sidebar);
    expect(component).toHaveLength(1);
  });

  it('should StepperChevron correctly', () => {
    const component = wrapper.find(StepperChevron);
    expect(component).toHaveLength(1);
  });

  it('should Topbar correctly', () => {
    const component = wrapper.find(Topbar);
    expect(component).toHaveLength(1);
  });

  it('should Header correctly', () => {
    const component = wrapper.find(Header);
    expect(component).toHaveLength(1);
  });

  it('should Section correctly', () => {
    const component = wrapper.find(Section);
    expect(component.length).toBeGreaterThan(0);
  });
});
