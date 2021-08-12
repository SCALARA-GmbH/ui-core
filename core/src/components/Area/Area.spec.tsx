import * as React from 'react';
import { render } from 'testUtils/render';

import Area from './Area';

describe('<Area />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Area />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Area />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Area />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
