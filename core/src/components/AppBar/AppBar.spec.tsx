import * as React from 'react';

import { fireEvent, render } from '../../../test-utils/render';

import AppBar from './AppBar';

describe('<AppHeader />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <AppBar menuItems={[]} menuTrayLabel={'test'} selectedId={0} />
    );
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(<AppBar menuItems={[]} menuTrayLabel={'test'} selectedId={0} />);
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(<AppBar menuItems={[]} menuTrayLabel={'test'} selectedId={0} />);
    expect(console.error).not.toHaveBeenCalled();
  });
  it('clicks on a left menu item', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <AppBar
        onClick={handleClick}
        menuItems={[
          { id: 0, label: 'RELATIONS', title: 'TITLE' },
          { id: 1, label: 'THINGS', title: 'TITLE' },
        ]}
        menuTrayLabel={'test'}
        selectedId={0}
      />
    );

    fireEvent.click(getByRole('button', { name: 'RELATIONS' }));

    expect(handleClick).toHaveBeenCalledWith(0);
  });

  it('clicks on a menu item in mobile', () => {
    const handleClick = jest.fn();
    const { getByRole, getAllByRole } = render(
      <AppBar
        onClick={handleClick}
        menuItems={[
          { id: 0, label: 'RELATIONS', title: 'TITLE' },
          { id: 1, label: 'THINGS', title: 'TITLE' },
        ]}
        menuTrayLabel={'testingLabel'}
        selectedId={0}
      />
    );

    fireEvent.click(
      getByRole('button', { name: 'testingLabel', hidden: true })
    );

    // clicking on mobile and desktop
    const items = getAllByRole('button', { name: 'RELATIONS', hidden: true });
    fireEvent.click(items[0]);
    fireEvent.click(items[1]);

    expect(handleClick).toHaveBeenCalledWith(0);
  });
});
