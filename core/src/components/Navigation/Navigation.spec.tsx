import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Navigation>
        <NavigationItem label={'Buchung'} />
      </Navigation>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <Navigation>
        <NavigationItem label={'Konten'} />
        <NavigationItem label={'Buchungen'} />
      </Navigation>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Navigation>
        <NavigationItem label={'Konten'} onClick={() => handleClick('test')} />
        <NavigationItem
          label={'Buchungen'}
          onClick={() => handleClick('test2')}
        />
      </Navigation>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('test2');
  });

  it('does not call onClick handler function if disabled', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Navigation disabled>
        <NavigationItem label={'Konten'} onClick={handleClick} />
        <NavigationItem label={'Buchungen'} onClick={handleClick} />
      </Navigation>
    );

    expect(getByRole('button', { name: 'Buchungen' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
