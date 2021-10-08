import * as React from 'react';

import { render } from '../../../test-utils/render';

import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByTestId, getByText } = render(
      <Footer testId={'test'}>
        {'la baguette'}
        <a href={'#'} data-testid={'anchor-one'} />
        <a href={'#'} data-testid={'anchor-two'} />
      </Footer>
    );

    expect(getByText('la baguette')).toBeInTheDocument();
    expect(getByTestId('anchor-one')).toBeInTheDocument();
    expect(getByTestId('anchor-two')).toBeInTheDocument();
  });
});
