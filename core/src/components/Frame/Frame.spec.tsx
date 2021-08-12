import * as React from 'react';

import { render } from '../../../testUtils/render';

import Frame from './Frame';

describe('<Frame />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Frame />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Frame />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Frame />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders children', () => {
    const { getByText } = render(<Frame>TestApp</Frame>);
    const frameNode = getByText('TestApp');
    expect(frameNode).toBeInTheDocument();
  });
});
