import * as React from 'react';

import { render } from '../../../test-utils/render';

import Divider from './Divider';

describe('<Divider />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Divider />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Divider />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Divider />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
