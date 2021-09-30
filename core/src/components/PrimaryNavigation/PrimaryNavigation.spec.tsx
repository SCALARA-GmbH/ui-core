import * as React from 'react';
import { fireEvent, render } from 'test-utils/render';

import PrimaryNavigationDesktop from './PrimaryNavigationDesktop';
import PrimaryNavigationItem from './PrimaryNavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PrimaryNavigationDesktop>
        <PrimaryNavigationItem label={'Buchung'} selected iconName={'select'} />
      </PrimaryNavigationDesktop>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <PrimaryNavigationDesktop>
        <PrimaryNavigationItem
          label={'Konten'}
          selected
          iconName={'information'}
        />
        <PrimaryNavigationItem label={'Buchungen'} iconName={'upload'} />
      </PrimaryNavigationDesktop>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <PrimaryNavigationDesktop>
        <PrimaryNavigationItem
          label={'Konten'}
          onClick={() => handleClick('test1')}
          selected
          iconName={'information'}
        />
        <PrimaryNavigationItem
          label={'Buchungen'}
          onClick={() => handleClick('test2')}
          iconName={'upload'}
        />
      </PrimaryNavigationDesktop>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('test2');
  });
});
