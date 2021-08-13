import * as React from 'react';

import { render } from '../../../test-utils/render';

import Icon from './Icon';

describe('<Icon />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Icon name={'scalara-text'} />);
    expect(container).toBeInTheDocument();
  });
});
