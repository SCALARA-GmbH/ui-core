import * as React from 'react';
import { render } from 'testUtils/render';

import NavigationItem from './NavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(<NavigationItem label={'Konten'} selectKey={'accounts'} />);

    expect(container).toBeInTheDocument();
  });

  it('renders with content', () => {
    const { getByText } = render(<NavigationItem label={'Konten'} selectKey={'accounts'} />);

    expect(getByText('Konten')).toBeTruthy();
  });
});
