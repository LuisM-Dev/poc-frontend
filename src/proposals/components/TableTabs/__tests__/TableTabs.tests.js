import React from 'react';
import TableTabs from '../TableTabs';
import { Tabs } from '@material-ui/core';
import { act } from 'react-dom/test-utils';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { proposalsStore } from '../../../store/stores';
import axios from 'axios';
import { tabHeaders } from '../../../admin';

jest.mock('axios');

proposalsStore();

describe('Table Tabs Component', () => {
  let mount;
  let wrapper;

  const findElement = element => wrapper.find(`[data-test='${element}']`);
  const findElementHostNodes = element => findElement(element).hostNodes();

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
        <TableTabs />
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

  it('should render tab correctly', () => {
    const component = findElementHostNodes('tabs');
    expect(component).toHaveLength(1);
  });

  it('should render tabs correctly', () => {
    const component = findElementHostNodes('tabs-tab');
    expect(component).toHaveLength(tabHeaders.length);
  });

  it('should render search input correctly', () => {
    const component = findElementHostNodes('search-input');
    expect(component).toHaveLength(1);
  });

  it('should render table correctly', () => {
    const component = findElementHostNodes('table-row-header');
    expect(component).toHaveLength(1);
  });

  it('should change tab correctly', () => {
    const componentTab = findElementHostNodes('tabs-tab');
    componentTab.at(1).simulate('click');
    wrapper.update();
    const componentTabs = wrapper.find(Tabs);
    const componentTabTitle = findElementHostNodes('tableToolbar-title');
    expect(componentTabs.props().value).toBe(1);
    expect(componentTabTitle.text()).toEqual('Header Proposals');
  });

  it('should filter proposals correctly', () => {
    console.log(findElementHostNodes('table-row-data').length);
    const componentTab = findElementHostNodes('tabs-tab');
    componentTab.at(1).simulate('click');
    wrapper.update();
    const componentTableRows = findElementHostNodes('table-row-data');
    expect(componentTableRows.length).toBeLessThan(2);
  });

  it('should search and filter correctly', () => {
    const event = { target: { value: 'account 1' } };
    const componentSearchInput = findElementHostNodes('search-input');
    componentSearchInput.simulate('change', event);
    wrapper.update();
    const componentTableRows = findElementHostNodes('table-row-data');
    expect(componentTableRows).toHaveLength(1);
  });
});
