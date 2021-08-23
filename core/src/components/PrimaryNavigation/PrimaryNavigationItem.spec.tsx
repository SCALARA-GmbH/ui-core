import * as React from 'react';

import { render } from '../../../test-utils/render';

import PrimaryNavigationItem from './PrimaryNavigationItem';

describe('<PrimaryNavigationItem />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PrimaryNavigationItem
        label={'Konten'}
        selectKey={'accounts'}
        iconName={'unlock-accounts'}
      />
    );

    expect(container).toBeInTheDocument();
  });
});
