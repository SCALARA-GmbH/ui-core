import * as React from 'react';

import { render } from '../../../testUtils/render';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Checkbox name={'checkbox'} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Checkbox name={'checkbox'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Checkbox name={'checkbox'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('can get byRole with name', () => {
    const { getByRole } = render(<Checkbox name={'checkbox'} ariaLabel={'checkbox'} />);
    expect(getByRole('checkbox', { name: 'checkbox' })).toBeTruthy();
  });
  it('can get byRole with name', () => {
    const { getByLabelText } = render(<Checkbox name={'checkbox'} ariaLabel={'checkbox label'} />);
    expect(getByLabelText('checkbox label')).toBeTruthy();
  });

  it('can get byRole with label', () => {
    const { getByText } = render(<Checkbox name={'checkbox'} label={'testing label'} />);
    expect(getByText('testing label')).toBeTruthy();
  });
});
