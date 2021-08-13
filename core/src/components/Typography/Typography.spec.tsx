import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import { Variant } from './types';
import Typography, { getTag, Tag } from './Typography';

describe('<Typography />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Typography />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Typography />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Typography />);
    expect(console.error).not.toHaveBeenCalled();
  });
  test.each<[Variant, Tag]>([
    ['t1', 'h1'],
    ['t2', 'h1'],
    ['t3', 'h1'],
    ['c1', 'p'],
    ['c2', 'p'],
    ['c3', 'p'],
    ['c4', 'p']
  ])('returns $expected for variant $a', (a, expected) => {
    expect(getTag(a)).toBe(expected);
  });
  it('renders text', () => {
    const { getByText } = render(<Typography>Label</Typography>);
    const typographyNode = getByText('Label');
    expect(typographyNode).toBeInTheDocument();
  });
  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Typography testId="test" onClick={handleClick} />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not propagate on click event if onClick is provided', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <div onClick={handleClick}>
        <Typography testId="test" onClick={handleClick} />
      </div>
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('propagates on click events if onclick is not provided', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <div onClick={handleClick}>
        <Typography testId="test" />
      </div>
    );
    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
