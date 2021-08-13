import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import TableRow from './TableRow';

describe('<TableRow />', () => {
  it('renders without crashing', () => {
    const { container } = render(<TableRow />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<TableRow />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<TableRow />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('fires onClick when clicked on row', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <TableRow testId="test" onClick={handleClick} />
    );

    fireEvent.click(getByTestId('test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('fires also onClick when clicked on action button', () => {
    const handleClickRow = jest.fn();
    const handleClickAction = jest.fn();
    const { getByTestId } = render(
      <TableRow
        testId="test"
        onClick={handleClickRow}
        actionIconButtonProps={{
          iconName: 'close',
          onClick: handleClickAction
        }}
      />
    );

    fireEvent.click(getByTestId('test'));
    fireEvent.click(getByTestId('test-action-icon-button'));
    expect(handleClickRow).toHaveBeenCalledTimes(1);
    expect(handleClickAction).toHaveBeenCalledTimes(1);
  });
});
