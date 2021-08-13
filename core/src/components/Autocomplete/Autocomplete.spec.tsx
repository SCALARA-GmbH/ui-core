import * as React from 'react';

import { act, fireEvent, render } from '../../../test-utils/render';

import Autocomplete from './Autocomplete';

describe('<Autocomplete />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Autocomplete name={'test'} options={[]} />);
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Autocomplete name={'test'} options={[]} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Autocomplete name={'test'} options={[]} />);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('can get input by role', () => {
    const { getByRole } = render(
      <Autocomplete
        name={'test-name'}
        options={[
          { title: 'test1', value: '1' },
          { title: 'test2', value: '2' }
        ]}
      />
    );

    expect(getByRole('textbox', { name: 'test-name' })).toBeTruthy();
  });

  it('changes the value', () => {
    const handleChange = jest.fn();
    const { getByRole, getByText } = render(
      <Autocomplete
        onChange={handleChange}
        name={'test-name'}
        options={[
          { title: 'test1', value: '1' },
          { title: 'test2', value: '2' }
        ]}
      />
    );

    act(() => {
      fireEvent.change(getByRole('textbox', { name: 'test-name' }), {
        target: { value: 'tes' }
      });
    });

    act(() => {
      fireEvent.click(getByText('test1'));
    });

    expect(handleChange).toHaveBeenCalledWith({ title: 'test1', value: '1' });
  });

  it('clears the selection', () => {
    const handleClear = jest.fn();
    const { getByRole, getByText } = render(
      <Autocomplete
        onClear={handleClear}
        name={'test-name'}
        clearLabel={'clear-input-test-label'}
        options={[
          { title: 'test1', value: '1' },
          { title: 'test2', value: '2' }
        ]}
      />
    );

    act(() => {
      fireEvent.change(getByRole('textbox', { name: 'test-name' }), {
        target: { value: 'tes' }
      });
    });

    act(() => {
      fireEvent.click(getByText('test1'));
    });

    act(() => {
      fireEvent.click(getByRole('button', { name: 'clear-input-test-label' }));
    });

    expect(handleClear).toHaveBeenCalled();
  });

  it('has aria labeled by', () => {
    const { getByLabelText } = render(
      <Autocomplete
        name={'test-name'}
        label={'test-another-name'}
        ariaLabel={'test-yet-another-name'}
        options={[
          { title: 'test1', value: '1' },
          { title: 'test2', value: '2' }
        ]}
      />
    );

    expect(getByLabelText('test-yet-another-name')).toBeTruthy();

    expect(
      fireEvent.input(getByLabelText('test-yet-another-name'), {
        target: { value: 'testing entering text' }
      })
    );

    expect(getByLabelText('test-yet-another-name')).toHaveValue(
      'testing entering text'
    );
  });
});
