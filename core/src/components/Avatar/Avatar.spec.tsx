import * as React from 'react';

import { fireEvent, render } from '../../../testUtils/render';

import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Avatar />);

    expect(container).toBeInTheDocument();
  });

  it('renders children with pointer cursor if onClick and editable are provided', () => {
    const { getByTestId } = render(<Avatar testId={'test'} onClick={jest.fn()} editable />);

    expect(getByTestId('test')).toHaveStyle('cursor: pointer');
  });

  it('renders children with pointer cursor if onClick is provided', () => {
    const { getByTestId } = render(<Avatar testId={'test'} onClick={jest.fn()} />);

    expect(getByTestId('test')).toHaveStyle('cursor: pointer');
  });

  it('renders children without pointer cursor if onClick is not provided', () => {
    const { queryByTestId } = render(<Avatar testId={'test'} />);

    expect(queryByTestId('test-edit-icon')).toBeFalsy();
  });

  it('calls the onclick handler', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(<Avatar onClick={handleClick} testId={'test'} />);

    fireEvent.click(getByTestId('test'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('calls the edit onclick handler', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(<Avatar editable onClick={handleClick} testId={'test'} />);
    expect(getByTestId('test-edit-icon')).toBeTruthy();

    fireEvent.click(getByTestId('test-edit-icon'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
