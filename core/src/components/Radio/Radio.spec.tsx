import * as React from 'react';

import { ThemeProvider } from '../..';
import { fireEvent, render } from '../../../test-utils/render';

import Radio from './Radio';

describe('<Radio />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Radio onChange={jest.fn()} options={[]} value={''} />
    );
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<Radio onChange={jest.fn()} options={[]} value={''} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<Radio onChange={jest.fn()} options={[]} value={''} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('changes the selection', () => {
    const options = [
      { title: 'test1', value: '1' },
      { title: 'test2', value: '2' },
    ];
    const handleChange = jest.fn();

    const { getByRole } = render(
      <Radio onChange={handleChange} options={options} value={'1'} />
    );

    fireEvent.click(getByRole('radio', { name: 'test2' }));
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), '2');
  });
  it('rerender with value change', () => {
    const options = [
      { title: 'test1', value: '1' },
      { title: 'test2', value: '2' },
    ];
    const handleChange = jest.fn();

    const { getByRole, rerender } = render(
      <Radio onChange={handleChange} options={options} value={'1'} />
    );

    expect(getByRole('radio', { name: 'test1' })).toBeChecked();

    rerender(
      <ThemeProvider>
        <Radio onChange={handleChange} options={options} value={'2'} />
      </ThemeProvider>
    );
    expect(getByRole('radio', { name: 'test2' })).toBeChecked();
  });
});
