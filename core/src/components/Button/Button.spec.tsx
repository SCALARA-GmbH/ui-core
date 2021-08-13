import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import Button from './Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Button />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Button />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders label', () => {
    const { getByText } = render(<Button testId={'test'} label={'Label'} />);
    const buttonNode = getByText('Label');
    expect(buttonNode).toBeInTheDocument();
  });
  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button testId="test" onClick={handleClick} />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not fire onClick when clicked while disabled', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button testId="test" disabled onClick={handleClick} />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
