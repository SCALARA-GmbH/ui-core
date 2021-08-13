import { queryByText } from '@testing-library/react';
import * as React from 'react';

import { render } from '../../../test-utils/render';

import TableCell from './TableCell';

describe('<TableCell />', () => {
  it('renders without crashing', () => {
    const { container } = render(<TableCell />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<TableCell />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<TableCell />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders with title and subtitle', () => {
    const { container } = render(
      <TableCell title={'title'} subtitle={'subtitle'} />
    );

    const title = queryByText(container, 'title');
    expect(title).toBeTruthy();
    const subtitle = queryByText(container, 'subtitle');
    expect(subtitle).toBeTruthy();
  });
  it('does not render title if hideTitle is set', () => {
    const { container } = render(
      <TableCell title={'title'} subtitle={'subtitle'} hideTitle />
    );

    const title = queryByText(container, 'title');
    expect(title).toBeFalsy();
    const subtitle = queryByText(container, 'subtitle');
    expect(subtitle).toBeTruthy();
  });
  it('does not render subtitle if hideSubtitle is set', () => {
    const { container } = render(
      <TableCell title={'title'} subtitle={'subtitle'} hideSubtitle />
    );

    const title = queryByText(container, 'title');
    expect(title).toBeTruthy();
    const subtitle = queryByText(container, 'subtitle');
    expect(subtitle).toBeFalsy();
  });
});
