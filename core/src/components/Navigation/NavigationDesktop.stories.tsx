import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Popover, useTheme } from '../..';
import { usePopoverPositionUpdate } from '../Popover';

import NavigationDesktop from './NavigationDesktop';
import NavigationItem from './NavigationItem';
import NavigationItemGroup from './NavigationItemGroup';

export default {
  title: 'Components/NavigationDesktop',
  component: NavigationDesktop,
  decorators: [withKnobs],
};

const Labels: string[] = [
  'Accounts',
  'Transactions',
  'Business plan',
  'Fiscal year',
];

export const NavigationDesktopStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');
  const [selected, setSelected] = React.useState<string>(Labels[0]);

  const handleClick = (label: string) => {
    setSelected(label);
    click(label);
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
      }}
    >
      <NavigationDesktop header={'Finances'}>
        <NavigationItemGroup title={'Accounting'}>
          {Labels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              onClick={() => handleClick(label)}
              selected={label === selected}
            />
          ))}
        </NavigationItemGroup>
      </NavigationDesktop>
    </div>
  );
};
NavigationDesktopStory.storyName = 'Overview';

export const NavigationDesktopDisabledStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');

  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const handleClick = (label: string) => {
    setSelected(label);
    click(label);
  };

  const [open, setOpen] = React.useState(false);
  const { update, popoverRef, anchorElement } = usePopoverPositionUpdate();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
      }}
      onMouseMove={(event: React.MouseEvent<HTMLElement>) =>
        update({ x: event.clientX, y: event.clientY })
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavigationDesktop disabled header={'Disabled Finances'}>
        <NavigationItemGroup title={'Accounting'}>
          {Labels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              onClick={() => handleClick(label)}
              selected={selected === label}
            />
          ))}
        </NavigationItemGroup>
      </NavigationDesktop>
      <Popover
        open={open}
        popoverRef={popoverRef}
        anchorElement={anchorElement}
        variant={'info'}
      >
        <>
          Schalten Sie zunächst Ihr
          <br /> Hauptbuch frei
        </>
      </Popover>
    </div>
  );
};
NavigationDesktopDisabledStory.storyName = 'Disabled';
