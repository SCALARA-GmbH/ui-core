import * as React from 'react';

import { act, fireEvent, render } from '../../../test-utils/render';

import Dialog from './Dialog';

describe('<Dialog />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Dialog onClose={jest.fn()} title={'title'} />
    );

    expect(container).toBeInTheDocument();
  });

  it('renders without crashing when open', () => {
    const { container } = render(
      <Dialog onClose={jest.fn()} title={'title'} open />
    );

    expect(container).toBeInTheDocument();
  });

  it('renders with back button label', () => {
    const handleBack = jest.fn();

    const { getByRole } = render(
      <Dialog
        onClose={jest.fn()}
        title={'title'}
        onBack={handleBack}
        backLabel={'back-label'}
        open
      />
    );

    act(() => {
      fireEvent.click(getByRole('button', { name: 'back-label' }));
    });

    expect(handleBack).toHaveBeenCalled();
  });
});
