import * as React from 'react';

import { fireEvent, render } from '../../../testUtils/render';

import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  it('renders without crashing', () => {
    const { container } = render(<DatePicker onChange={jest.fn()} name={'test'} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<DatePicker onChange={jest.fn()} name={'test'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<DatePicker onChange={jest.fn()} name={'test'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders in correct format', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <DatePicker
        required
        testId={'testid'}
        onChange={handleChange}
        name={'date'}
        label={'some label'}
        value={new Date('01-15-2012')}
      />,
    );

    expect(getByTestId('testid')).toHaveValue(`15.01.2012`);
  });

  it('clears if clear icon is pressed', () => {
    expect.assertions(1);
    const handleChange = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <DatePicker
        testId={'testid'}
        onChange={handleChange}
        name={'date'}
        label={'some label'}
        value={new Date('01-15-2012')}
        clearLabel={'clear'}
      />,
    );

    fireEvent.click(getByTestId('testid-clear'));
    fireEvent.click(getByLabelText('clear'));
    expect(handleChange).toHaveBeenNthCalledWith(2, null);
  });
});
