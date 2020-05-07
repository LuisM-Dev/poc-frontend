import React from 'react';
import Proposals from '../Proposals';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { act } from 'react-dom/test-utils';
import { Sidebar, Header, TableTabs, Topbar } from '../../../components';
import { proposalsStore } from '../../../store/stores';
import axios from 'axios';

proposalsStore();

jest.mock('axios');

describe('Proposals View page', () => {
  let mount;
  let wrapper;

  const waitForComponent = async wrapper => {
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      wrapper.update();
    });
  };

  beforeEach(async () => {
    mount = createMount();
    const sampleResponse = {
      data: [
        { id: '1', account: 'account 1' },
        { id: '2', account: 'account 2' }
      ]
    };
    axios.get.mockResolvedValue(sampleResponse);
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Proposals />
      </ThemeProvider>
    );
    await waitForComponent(wrapper);
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render SideBar correctly', () => {
    let component = {};
    act(() => {
      component = wrapper.find(Sidebar);
    });
    expect(component).toHaveLength(1);
  });

  it('should render TableTabs correctly', () => {
    const component = wrapper.find(TableTabs);
    expect(component).toHaveLength(1);
  });

  it('should render Top bar correctly', () => {
    const component = wrapper.find(Topbar);
    expect(component).toHaveLength(1);
  });

  it('should render Header correctly', () => {
    const component = wrapper.find(Header);
    expect(component).toHaveLength(1);
  });
});
