import * as React from 'react';

import { fireEvent, render } from '../../../testUtils/render';

import Chip from './Chip';

describe('<Chip />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Chip />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Chip />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Chip />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders label', () => {
    const { getByText } = render(<Chip label={'Label'} />);
    const node = getByText('Label');
    expect(node).toBeInTheDocument();
  });
  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(<Chip label="test" ariaLabel={'test'} onClick={handleClick} />);

    fireEvent.click(getByLabelText('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not fire onClick when clicked while disabled', () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(<Chip label="test" ariaLabel={'test'} disabled onClick={handleClick} />);

    fireEvent.click(getByLabelText('test'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
