import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import PrimaryNavigationDesktop from './PrimaryNavigationDesktop';
import PrimaryNavigationItem from './PrimaryNavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PrimaryNavigationDesktop>
        <PrimaryNavigationItem
          label={'Buchung'}
          selectKey={'Buchung'}
          iconName={'select'}
        />
      </PrimaryNavigationDesktop>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <PrimaryNavigationDesktop>
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
      </PrimaryNavigationDesktop>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <PrimaryNavigationDesktop onClick={handleClick}>
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
      </PrimaryNavigationDesktop>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('Buchung');
  });
});
