import * as React from 'react';
import { fireEvent, render } from 'testUtils/render';

import ThemeProvider from '../ThemeProvider';

import SideMenu from './SideMenu';

describe('<SideMenu />', () => {
  it('renders without crashing', () => {
    const { container } = render(<SideMenu menuHandle={null} onClose={jest.fn()} menuItems={[]} />);

    expect(container).toBeInTheDocument();
  });

  it('renders with menu items', () => {
    const { container } = render(
      <SideMenu
        menuHandle={null}
        onClose={jest.fn()}
        menuItems={[{ id: 0, iconName: 'person', label: 'PROFILE', title: 'PROFILE' }]}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  it('clicks on an menu item', async () => {
    const handleClick = jest.fn();

    const TestComponent = () => {
      const ref = React.useRef<HTMLDivElement>();
      ref.current = document.createElement('div');
      return (
        <ThemeProvider>
          <SideMenu
            menuHandle={ref.current}
            onClose={jest.fn()}
            menuItems={[{ id: 0, iconName: 'person', label: 'PROFILE', title: 'PROFILE' }]}
            onClick={handleClick}
          />
        </ThemeProvider>
      );
    };
    const { getByRole } = render(<TestComponent />);

    fireEvent.click(getByRole('menuitem', { name: 'PROFILE' }));

    expect(handleClick).toHaveBeenCalledWith(0);
  });

  it('cannot click menuItem if menuHandle is not provided', async () => {
    const handleClick = jest.fn();

    const TestComponent = () => {
      return (
        <ThemeProvider>
          <SideMenu
            menuHandle={null}
            onClose={jest.fn()}
            menuItems={[{ id: 0, iconName: 'person', label: 'PROFILE', title: 'PROFILE' }]}
            onClick={handleClick}
          />
        </ThemeProvider>
      );
    };
    const { queryByRole } = render(<TestComponent />);

    expect(queryByRole('menuitem', { name: 'PROFILE' })).toBeFalsy();
  });
});
