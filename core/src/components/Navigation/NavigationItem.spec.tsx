import * as React from 'react';
import { render } from 'test-utils/render';

import NavigationItem from './NavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(<NavigationItem label={'Konten'} />);

    expect(container).toBeInTheDocument();
  });

  it('renders with content', () => {
    const { getByText } = render(<NavigationItem label={'Konten'} />);

    expect(getByText('Konten')).toBeTruthy();
  });
});
