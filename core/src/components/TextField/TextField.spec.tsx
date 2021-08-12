import * as React from 'react';

import { fireEvent, render } from '../../../testUtils/render';

import TextField from './TextField';

describe('<TextField />', () => {
  it('renders without crashing', () => {
    const { container } = render(<TextField name={'test'} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<TextField name={'test'} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<TextField name={'test'} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders label and bottom text', () => {
    const { queryByTestId, queryAllByText, queryByText } = render(
      <TextField name={'test'} testId={'testid'} label={'I am a label'} helperText={'and I am a helper text'} />,
    );
    expect(queryByTestId('testid')).toBeTruthy();
    expect(queryByTestId('testid-label')).toBeTruthy();
    expect(queryAllByText('I am a label')).toBeTruthy();
    expect(queryByText('and I am a helper text')).toBeTruthy();
  });

  it('can get by role', () => {
    const { getByRole } = render(
      <TextField testId={'testid'} label={'I am a label'} name={'test'} helperText={'and I am a helper text'} />,
    );
    expect(getByRole('textbox', { name: 'I am a label' })).toBeTruthy();
  });

  it('sets value', () => {
    const { getByRole } = render(
      <TextField name={'test'} testId={'testid'} label={'I am a label'} helperText={'and I am a helper text'} />,
    );

    expect(getByRole('textbox', { name: 'I am a label' })).toHaveValue('');

    fireEvent.input(getByRole('textbox', { name: 'I am a label' }), { target: { value: 'new text value' } });

    expect(getByRole('textbox', { name: 'I am a label' })).toHaveValue('new text value');
  });
});
