import React from 'react';
import { act } from 'react-dom/test-utils';
import Footer from '../Footer';
import theme from '../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';

import { proposalStore } from '../../../store/stores';

proposalStore();

describe('Footer Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  beforeEach(async () => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    // await waitForComponent(wrapper);
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render footer correctly', () => {
    const component = findElement('footer');
    expect(component).toHaveLength(1);
  });

  it('should render edit button correctly', () => {
    const component = findElement('footer');
    expect(component).toHaveLength(1);
  });

  it('should render edit text button correctly', () => {
    const component = findElement('footer-edit');
    expect(component.text()).toContain('Edit');
  });

  it('should render next button correctly', () => {
    const component = findElement('footer-next');
    expect(component).toHaveLength(1);
  });

  it('should render next text button correctly', () => {
    const component = findElement('footer-next');
    expect(component.text()).toContain('Next');
  });

  it('should render save button correctly', async () => {
    let component = findElement('footer-edit');
    await act(async () => {
      await component.simulate('click');
      wrapper.update();
    });
    component = findElement('footer-save');
    expect(component).toHaveLength(1);
  });

  it('should render save text button correctly', async () => {
    const component = findElement('footer-save');
    expect(component.text()).toBe('Save');
  });

  it('should render cancel button correctly', async () => {
    const component = findElement('footer-cancel');
    expect(component).toHaveLength(1);
  });

  it('should render cancel text button correctly', async () => {
    const component = findElement('footer-cancel');
    expect(component.text()).toBe('Cancel');
  });

  it('should save proposal correctly', async () => {
    let component = findElement('footer-save');
    await act(async () => {
      await component.simulate('click');
    });
    wrapper.update();
    // component = findElement('footer-edit');
    // expect(component.hostNodes()).toHaveLength(1);
  });

  it('should render edit button after save correctly', async () => {
    let component = findElement('footer-edit');
    await act(async () => {
      await component.simulate('click');
      wrapper.update();
    });
    component = findElement('footer-save');
    await act(async () => {
      await component.simulate('click');
      wrapper.update();
    });
    component = findElement('footer-edit');
    expect(component).toHaveLength(1);
  });
});
