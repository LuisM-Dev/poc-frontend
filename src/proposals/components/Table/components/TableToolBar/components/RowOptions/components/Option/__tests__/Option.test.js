import React from 'react';
import Option from '../Option';
import theme from '../../../../../../../../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMount } from '@material-ui/core/test-utils';
import { Delete as DeleteIcon } from '@material-ui/icons';

describe('Option Component', () => {
  let mount;
  let wrapper;

  const findElement = element =>
    wrapper.find(`[data-test='${element}']`).hostNodes();

  const mockClick = jest.fn();

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Option
          dataTest={'option-button'}
          icon={<DeleteIcon />}
          onClick={mockClick}
          title={'demo'}
        />
      </ThemeProvider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should view proposal clicked correctly', () => {
    const event = {
      target: { value: 'some value' }
    };
    const component = findElement('option-button');
    component.simulate('click', event);
    expect(mockClick).toHaveBeenCalledWith('some value');
  });

  it('should icon be displayed correctly', () => {
    const component = wrapper.find('svg');
    expect(component).toHaveLength(1);
  });
});
