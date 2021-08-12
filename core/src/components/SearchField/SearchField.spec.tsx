import * as React from 'react';

import { render } from '../../../testUtils/render';

import SearchField from './SearchField';

describe('<SearchField />', () => {
  it('renders without crashing', () => {
    const { container } = render(<SearchField name={'test'} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<SearchField name={'test'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<SearchField name={'test'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
