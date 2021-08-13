import * as React from 'react';
import { fireEvent, render } from '../../../test-utils/render';

import PrimaryNavigation from './PrimaryNavigation';
import PrimaryNavigationItem from './PrimaryNavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PrimaryNavigation>
        <PrimaryNavigationItem
          label={'Buchung'}
          selectKey={'Buchung'}
          iconName={'select'}
        />
      </PrimaryNavigation>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <PrimaryNavigation>
        <PrimaryNavigationItem
          label={'Konten'}
          selectKey={'Konten'}
          iconName={'information'}
        />
        <PrimaryNavigationItem
          label={'Buchungen'}
          selectKey={'Buchung'}
          iconName={'upload'}
        />
      </PrimaryNavigation>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <PrimaryNavigation onClick={handleClick}>
        <PrimaryNavigationItem
          label={'Konten'}
          selectKey={'Konten'}
          iconName={'information'}
        />
        <PrimaryNavigationItem
          label={'Buchungen'}
          selectKey={'Buchung'}
          iconName={'upload'}
        />
      </PrimaryNavigation>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('Buchung');
  });
});
