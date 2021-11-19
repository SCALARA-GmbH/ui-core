import { CollapseProps } from '@mui/material/Collapse';
import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import SearchSelect, { SearchSelectOption } from './SearchSelect';

jest.mock('@mui/material/Collapse', () => (props: CollapseProps) =>
  props.in ? <div>{props.children}</div> : <div />
);

describe('<SearchSelect />', () => {
  it('renders without crashing', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['address', 'EGF', 'test'],
      },
    ];
    const { container } = render(
      <SearchSelect
        name={'property-name'}
        onChange={jest.fn()}
        options={options}
        value={null}
      />
    );

    expect(container).toBeInTheDocument();
  });

  it('selects an option', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['address', 'EGF', 'test'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address 2', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByRole } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        value={options[0]}
      />
    );

    fireEvent.click(getByRole('combobox', { name: 'property-name' }));

    fireEvent.click(getByRole('option', { name: 'WEG 2 address 2 EGF test' }));

    expect(handleChange).toHaveBeenCalledWith({
      cells: ['address 2', 'EGF', 'test'],
      title: 'WEG 2',
      value: '1',
    });
  });

  it('has header after opening', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['address', 'EGF', 'test'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address 2', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByRole, queryByText } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={options[0]}
      />
    );

    expect(queryByText('please select')).toBeFalsy();

    fireEvent.click(getByRole('combobox', { name: 'property-name' }));

    expect(queryByText('please select')).toBeTruthy();
  });

  it('has header before opening if no value was set initially', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['address', 'EGF', 'test'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address 2', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { queryByText } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={null}
      />
    );

    expect(queryByText('please select')).toBeTruthy();
  });

  it('finds input after opening for selection', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['something', 'else'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByText, queryByRole } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={null}
      />
    );

    fireEvent.click(getByText('please select'));

    expect(queryByRole('textbox', { name: 'please select' })).toBeTruthy();
  });

  it('fills input and searches for particular option, other options are not displayed', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['something', 'else'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByText, queryByText, getByRole } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={null}
      />
    );

    fireEvent.click(getByText('please select'));

    expect(queryByText('something')).toBeTruthy();

    fireEvent.input(getByRole('textbox', { name: 'please select' }), {
      target: { value: 'address EGF' },
    });

    expect(queryByText('something')).toBeFalsy();
  });

  it('shows not found text if no match exists', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['something', 'else'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByText, queryByText, getByRole } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={null}
        notFoundText={'if not found text'}
      />
    );

    fireEvent.click(getByText('please select'));

    expect(queryByText('something')).toBeTruthy();

    fireEvent.input(getByRole('textbox', { name: 'please select' }), {
      target: { value: 'nonexistingvalue' },
    });

    expect(queryByText('if not found text')).toBeTruthy();
  });

  it('does not show notfound text if a match exists', () => {
    const options: SearchSelectOption[] = [
      {
        value: '0',
        title: 'WEG 1',
        cells: ['something', 'else'],
      },
      {
        value: '1',
        title: 'WEG 2',
        cells: ['address', 'EGF', 'test'],
      },
    ];

    const handleChange = jest.fn();
    const { getByText, queryByText, getByRole } = render(
      <SearchSelect
        name={'property-name'}
        onChange={handleChange}
        options={options}
        header={'please select'}
        value={null}
        notFoundText={'if not found text'}
      />
    );

    fireEvent.click(getByText('please select'));

    expect(queryByText('something')).toBeTruthy();

    fireEvent.input(getByRole('textbox', { name: 'please select' }), {
      target: { value: 'address' },
    });

    expect(queryByText('if not found text')).toBeFalsy();
  });
});
