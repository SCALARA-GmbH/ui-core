import * as React from 'react';

import { render } from '../../../testUtils/render';

import Switch from './Switch';

describe('<Switch />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Switch />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Switch />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Switch />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
