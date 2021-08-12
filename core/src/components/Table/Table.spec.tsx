import * as React from 'react';

import { TableCell, TableRow } from '../..';
import { render } from '../../../testUtils/render';

import Table from './Table';

describe('<Table />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Table />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Table />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Table />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders no divider with only one row', () => {
    const { queryByTestId } = render(
      <Table testId={'test'}>
        <TableRow>
          <TableCell>I am a row</TableCell>
        </TableRow>
      </Table>,
    );
    expect(queryByTestId('test-row-divider-1')).not.toBeInTheDocument();
  });
  it('renders two dividers with three rows', () => {
    const { queryByTestId } = render(
      <Table testId={'test'}>
        <TableRow>
          <TableCell>Row 1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 3</TableCell>
        </TableRow>
      </Table>,
    );
    expect(queryByTestId('test-row-divider-1')).toBeInTheDocument();
    expect(queryByTestId('test-row-divider-2')).toBeInTheDocument();
  });
});
