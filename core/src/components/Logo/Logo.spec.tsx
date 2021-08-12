import * as React from 'react';

import { render } from '../../../testUtils/render';

import Logo from './Logo';

describe('<Divider />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Logo />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Logo />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Logo />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
