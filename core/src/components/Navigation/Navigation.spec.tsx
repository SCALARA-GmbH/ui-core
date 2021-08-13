import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Navigation>
        <NavigationItem label={'Buchung'} selectKey={'Buchung'} />
      </Navigation>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders two navigation button', () => {
    const { getByRole } = render(
      <Navigation>
        <NavigationItem label={'Konten'} selectKey={'Konten'} />
        <NavigationItem label={'Buchungen'} selectKey={'Buchung'} />
      </Navigation>
    );

    expect(getByRole('button', { name: 'Konten' })).toBeTruthy();
    expect(getByRole('button', { name: 'Buchungen' })).toBeTruthy();
  });

  it('calls onClick handle function with selected element', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Navigation onClick={handleClick}>
        <NavigationItem label={'Konten'} selectKey={'Konten'} />
        <NavigationItem label={'Buchungen'} selectKey={'Buchungen'} />
      </Navigation>
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).toHaveBeenCalledWith('Buchungen');
  });

  it('does not call onClick handler function if disabled', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Navigation onClick={handleClick} disabled>
        <NavigationItem label={'Konten'} selectKey={'Konten'} />
        <NavigationItem label={'Buchungen'} selectKey={'Buchungen'} />
      </Navigation>
    );

    expect(getByRole('button', { name: 'Buchungen' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );

    fireEvent.click(getByRole('button', { name: 'Buchungen' }));

    expect(handleClick).not.toHaveBeenCalledWith('Buchungen');
  });
});
