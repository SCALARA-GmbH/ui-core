import * as React from 'react';

import { render } from '../../../test-utils/render';

import Paper from './Paper';

describe('<Paper />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Paper />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Paper />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Paper />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
