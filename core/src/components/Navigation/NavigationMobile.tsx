import { Drawer, List } from '@material-ui/core';
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
}

const NavigationMobile: React.FunctionComponent<Props> = ({
  children,
  disabled,
  secondary,
  ariaLabel
}) => {
  const classes = useStyles({ disabled });
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.mobileRoot}>
      <div
        className={cx(classes.select, {
          [classes.open]: open,
          [classes.secondaryMobile]: secondary
        })}
        role={'button'}
        aria-label={ariaLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={'subMenu'} className={classes.subMenuIcon} />
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
        onClose={() => setOpen(false)}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
          // solves zIndex issues with appbar
          disablePortal: true
        }}
        classes={{
          paper: classes.drawerPaperMobile
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
            >(children, (group) =>
              React.Children.map<
                React.ReactNode,
                React.ReactElement<NavigationItemProps>
              >(group.props.children, (child) =>
                React.cloneElement<NavigationItemProps>(child, {
                  onClick: () => {
                    setOpen(false);
                    child.props.onClick?.();
                  }
                })
              )
            )}
          </List>
        </Area>
      </Drawer>
    </div>
  );
};

export default NavigationMobile;
