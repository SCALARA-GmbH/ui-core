import { ListItem, useMediaQuery, useTheme } from '@mui/material';
import cx from 'classnames';
import * as React from 'react';

import { Typography } from '../../index';
import DefaultDivider from '../DefaultDivider';
import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';

import { useStyles } from './styles';

export interface PrimaryNavigationItemProps {
  label: string;
  iconName?: IconName;
  image?: string;
  selected?: boolean;
  onClick?: () => void;
  bottom?: boolean;
  divider?: boolean;
  hideForDesktop?: boolean;
  accountType?: 'person' | 'company';
}

const PrimaryNavigationItem: React.FunctionComponent<PrimaryNavigationItemProps> = ({
  label,
  iconName,
  selected,
  onClick,
  bottom,
  divider,
  hideForDesktop,
}) => {
  const classes = useStyles();

  const itemClass = cx({
    [classes.selectedItem]: selected,
    [classes.deselectedItem]: !selected,
  });
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const mobile = !desktop;

  return (
    <div className={cx({ [classes.hide]: desktop && hideForDesktop })}>
      {divider && (
        <DefaultDivider
          className={cx({
            [classes.dividerBottom]: bottom && !mobile,
            [classes.dividerBottomMobile]: bottom && mobile,
          })}
        />
      )}
      <ListItem
        className={cx({
          [classes.bottom]: bottom && !mobile,
          [classes.bottomMobile]: bottom && mobile,
          [classes.selected]: selected,
          [classes.deselected]: !selected,
          [classes.itemMobile]: mobile,
          [classes.item]: !mobile,
        })}
        button
        disableRipple
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          // note: this is fixed in mui v5 and does not have to be set manually
          event.preventDefault();
          onClick?.();
        }}
      >
        {!mobile && <span className={classes.tooltip}>{label}</span>}
        {iconName && <Icon name={iconName} className={itemClass} />}
        {mobile && (
          <Typography
            variant={selected ? 'c1' : 'c2'}
            className={cx(itemClass, classes.text)}
          >
            {label}
          </Typography>
        )}
      </ListItem>
    </div>
  );
};

export default PrimaryNavigationItem;
