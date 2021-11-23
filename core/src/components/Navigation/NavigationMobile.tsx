import { Drawer, List } from '@mui/material';
import cx from 'classnames';
import * as React from 'react';

import Area from '../Area';
import { Icon } from '../Icon';
import { ArrowDownIcon } from '../Select/Select';
import Typography from '../Typography';

import { NavigationItemProps } from './NavigationItem';
import { NavigationItemGroupProps } from './NavigationItemGroup';
import { useStyles } from './styles';

export interface Props {
  children:
    | React.ReactElement<NavigationItemGroupProps>[]
    | React.ReactElement<NavigationItemGroupProps>;
  disabled?: boolean;
  secondary?: boolean;
  ariaLabel?: string;
  tablet?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  open?: boolean;
}

const NavigationMobile: React.FunctionComponent<Props> = ({
  children,
  disabled,
  secondary,
  ariaLabel,
  tablet,
  open,
  onClick,
  onClose,
}) => {
  const classes = useStyles({ disabled });

  return (
    <div className={classes.mobileRoot}>
      <div
        className={cx(classes.select, {
          [classes.open]: open,
          [classes.secondaryMobile]: secondary,
          [classes.selectTablet]: tablet,
          [classes.selectMobile]: !tablet,
        })}
        role={'button'}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <Icon name={'subMenu'} className={classes.subMenuIconMobile} />
        {React.Children.map<
          React.ReactNode,
          React.ReactElement<NavigationItemGroupProps>
        >(children, (group) =>
          React.Children.map<
            React.ReactNode,
            React.ReactElement<NavigationItemProps>
          >(group.props.children, (child) =>
            child.props.selected ? (
              <Typography variant={'c1'}>{child.props.label}</Typography>
            ) : null
          )
        )}
        <ArrowDownIcon className={cx({ [classes.iconOpen]: open })} />
      </div>
      <Drawer
        className={classes.drawerMobile}
        BackdropProps={{ invisible: true }}
        variant="temporary"
        anchor="top"
        open={open}
        onClose={onClose}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
          // solves zIndex issues with appbar
          disablePortal: true,
        }}
        classes={{
          paper: classes.drawerPaperMobile,
        }}
      >
        <Area
          elevated
          border
          className={cx(classes.area, { [classes.areaSecondary]: secondary })}
        >
          <List className={classes.list}>
            {React.Children.map<
              React.ReactNode,
              React.ReactElement<NavigationItemGroupProps>
            >(children, (group) => group)}
          </List>
        </Area>
      </Drawer>
    </div>
  );
};

export default NavigationMobile;
