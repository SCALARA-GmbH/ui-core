import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import NavigationDesktop from './NavigationDesktop';
import NavigationItem from './NavigationItem';
import NavigationItemGroup from './NavigationItemGroup';

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: () => true,
  };
});

describe('<NavigationDesktop />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <NavigationDesktop>
        <NavigationItemGroup>
          <NavigationItem label={'Buchung'} />
        </NavigationItemGroup>
      </NavigationDesktop>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <NavigationDesktop>
        <NavigationItemGroup>
          <NavigationItem label={'Konten'} />
          <NavigationItem label={'Buchungen'} />
        </NavigationItemGroup>
      </NavigationDesktop>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <NavigationDesktop>
        <NavigationItemGroup>
          <NavigationItem
            label={'Konten'}
            onClick={() => handleClick('test')}
          />
          <NavigationItem
            label={'Buchungen'}
            onClick={() => handleClick('test2')}
          />
        </NavigationItemGroup>
      </NavigationDesktop>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('test2');
  });

  it('does not call onClick handler function if disabled', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <NavigationDesktop disabled>
        <NavigationItemGroup>
          <NavigationItem label={'Konten'} onClick={handleClick} />
          <NavigationItem label={'Buchungen'} onClick={handleClick} />
        </NavigationItemGroup>
      </NavigationDesktop>
    );

    expect(getByRole('button', { name: 'Buchungen' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
