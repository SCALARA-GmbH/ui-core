import { queryByRole } from '@testing-library/react';
import * as React from 'react';

import { act, fireEvent, render } from '../../../testUtils/render';
import AccordionItem from '../AccordionItem';

import Accordion from './Accordion';

describe('<Accordion /> <AccordionItem />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).toBeInTheDocument();
  });
  it('renders without children when not opened children', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).not.toHaveTextContent('Content');
  });
  it('renders with children', () => {
    const { container } = render(
      <Accordion initiallyOpen>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).toHaveTextContent('Content');
  });

  it('renders with multiple children', () => {
    const { container } = render(
      <Accordion initiallyOpen>
        <AccordionItem> Content1 </AccordionItem>
        <AccordionItem> Content2 </AccordionItem>
      </Accordion>,
    );

    expect(container).toHaveTextContent('Content1');
    expect(container).toHaveTextContent('Content2');
  });

  it('renders with header', () => {
    const { container } = render(
      <Accordion header={<div>header</div>}>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).toHaveTextContent('header');
  });

  it('renders with title', () => {
    const { container } = render(
      <Accordion title={'title'}>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).toHaveTextContent('title');
    expect(queryByRole(container, 'heading', { level: 1 })).toBeInTheDocument();
  });

  it('rotate arrow icon after opening and closing again', () => {
    expect.assertions(3);
    const { getByTestId } = render(
      <Accordion title={'title'}>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(getByTestId('accordion-icon')).toHaveStyle({ transform: 'rotate(0deg)' });
    act(() => {
      fireEvent.click(getByTestId('accordion'));
    });
    expect(getByTestId('accordion-icon')).toHaveStyle({ transform: 'rotate(180deg)' });
    act(() => {
      fireEvent.click(getByTestId('accordion'));
    });
    expect(getByTestId('accordion-icon')).toHaveStyle({ transform: 'rotate(0deg)' });
  });

  it('calls callback with state of accordion', () => {
    expect.assertions(4);

    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Accordion title={'title'} header={<div>testingHeader</div>} onChange={handleChange}>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(handleChange).toHaveBeenCalledWith(false);

    act(() => {
      fireEvent.click(getByLabelText('title'));
    });

    expect(handleChange).toHaveBeenCalledWith(true);

    act(() => {
      fireEvent.click(getByLabelText('title'));
    });

    expect(handleChange).toHaveBeenCalledWith(false);

    expect(handleChange).toHaveBeenCalledTimes(3);
  });

  it('calls callback onClick on accordion item', () => {
    expect.assertions(1);

    const handleClick = jest.fn();

    const { getByText } = render(
      <Accordion title={'title'} initiallyOpen>
        <AccordionItem onClick={handleClick}> Content </AccordionItem>
      </Accordion>,
    );

    act(() => {
      fireEvent.click(getByText('Content'));
    });

    expect(handleClick).toHaveBeenCalled();
  });

  it('renders accordion item with cursor pointer if callback onClick is provided', () => {
    expect.assertions(1);

    const { getByText } = render(
      <Accordion title={'title'} initiallyOpen>
        <AccordionItem onClick={jest.fn()}> Content </AccordionItem>
      </Accordion>,
    );

    act(() => {
      fireEvent.click(getByText('Content'));
    });

    expect(getByText('Content')).toHaveStyle('cursor: pointer');
  });

  it('renders accordion item with cursor default if callback onClick is not provided', () => {
    expect.assertions(1);

    const { getByText } = render(
      <Accordion title={'title'} initiallyOpen>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    act(() => {
      fireEvent.click(getByText('Content'));
    });

    expect(getByText('Content')).toHaveStyle('cursor: default');
  });

  it('does not render heading if no title is provided', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem> Content </AccordionItem>
      </Accordion>,
    );

    expect(container).toBeInTheDocument();
    expect(queryByRole(container, 'heading', { level: 1 })).not.toBeInTheDocument();
  });
});
