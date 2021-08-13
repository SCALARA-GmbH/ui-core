import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import Card from './Card';

describe('<Card />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Card
        label={'Action'}
        onClick={jest.fn}
        img={''}
        text={'Text'}
        title={'Title'}
      />
    );
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(
      <Card
        label={'Action'}
        onClick={jest.fn}
        img={''}
        text={'Text'}
        title={'Title'}
      />
    );
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(
      <Card
        label={'Action'}
        onClick={jest.fn}
        img={''}
        text={'Text'}
        title={'Title'}
      />
    );
    expect(console.error).not.toHaveBeenCalled();
  });
  it('renders inner components', () => {
    const { getByText, queryByTestId } = render(
      <Card
        testId={'cardId'}
        label={'Action'}
        onClick={jest.fn}
        img={''}
        text={'Text'}
        title={'Title'}
      />
    );
    expect(queryByTestId('cardId')).toBeInTheDocument();
    expect(queryByTestId('cardId-image')).toBeInTheDocument();
    expect(queryByTestId('cardId-title')).toBeInTheDocument();
    expect(queryByTestId('cardId-text')).toBeInTheDocument();
    expect(queryByTestId('cardId-button')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Text')).toBeInTheDocument();
  });
  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card
        testId={'cardId'}
        label={'Action'}
        onClick={handleClick}
        img={''}
        text={'Text'}
        title={'Title'}
      />
    );
    fireEvent.click(getByTestId('cardId'));
    fireEvent.click(getByTestId('cardId-image'));
    fireEvent.click(getByTestId('cardId-title'));
    fireEvent.click(getByTestId('cardId-text'));
    fireEvent.click(getByTestId('cardId-button'));
    expect(handleClick).toHaveBeenCalledTimes(5);
  });
});
