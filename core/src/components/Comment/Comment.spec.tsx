import * as React from 'react';

import { render } from '../../../testUtils/render';

import Comment from './Comment';

describe('<Comment />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Comment text={'comment content'} />);

    expect(container).toHaveTextContent('comment content');
  });

  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Comment text={'comment content'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Comment text={'comment content'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
