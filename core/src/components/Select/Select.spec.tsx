import * as React from 'react';

import { act, fireEvent, render, screen } from '../../../test-utils/render';

import Select from './Select';

describe('<Select />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Select
        options={[
          { value: '0', title: 'test' },
          { value: '1', title: 'test2' },
        ]}
      />
    );
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(
      <Select
        options={[
          { value: '0', title: 'test' },
          { value: '1', title: 'test2' },
        ]}
      />
    );
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(
      <Select
        options={[
          { value: '0', title: 'test' },
          { value: '1', title: 'test2' },
        ]}
      />
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  it('changes the value', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Select
        label={'test-label'}
        value={'0'}
        testId={'testid'}
        options={[
          { value: '0', title: 'test' },
          { value: '1', title: 'test2' },
        ]}
        onChange={handleChange}
      />
    );
    act(() => {
      fireEvent.change(getByTestId('testid-input'), { target: { value: '1' } });
    });

    expect(handleChange).toHaveBeenCalled();
  });

  it('changes the value by clicking on the role', () => {
    const handleValue = jest.fn();
    const handleChange = jest.fn((event) => {
      handleValue(event.target.value);
    });

    const { getByRole } = render(
      <Select
        label={'test-label'}
        value={'0'}
        testId={'testid'}
        options={[
          { value: '0', title: 'test3' },
          { value: '1', title: 'test2' },
        ]}
        onChange={handleChange}
      />
    );

    act(() => {
      fireEvent.mouseDown(getByRole('button', { name: 'test3' }));
    });

    act(() => {
      fireEvent.click(screen.getByText('test2'));
    });

    expect(handleValue).toHaveBeenCalledWith('1');
  });
});
