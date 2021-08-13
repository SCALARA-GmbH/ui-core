import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import IconButton from './IconButton';

describe('<IconButton />', () => {
  it('renders without crashing', () => {
    const { container } = render(<IconButton iconName={'close'} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<IconButton iconName={'close'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<IconButton iconName={'close'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <IconButton iconName={'close'} onClick={handleClick} testId={'test'} />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not fire onClick when clicked while disabled', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <IconButton
        iconName={'close'}
        onClick={handleClick}
        disabled
        testId={'test'}
      />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
