import { Avatar as MaterialAvatar, Badge, Tooltip } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { Size } from '../../types';
import { Icon } from '../Icon';

import { useStyles } from './styles';

export interface AvatarProps {
  image?: string;
  size?: Size;
  children?: React.ReactNode;
  alt?: string;
  className?: string;
  onClick?: () => void;
  testId?: string;
  type?: 'company' | 'person';
  tooltip?: string;
  editable?: boolean;
  registered?: boolean;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  className,
  size = 'medium',
  alt,
  image,
  onClick,
  testId = 'avatar',
  type = 'person',
  editable,
  tooltip = '',
  registered,
}) => {
  const classes = useStyles({ size, onClick });

  return (
    <Tooltip title={tooltip} onClick={onClick}>
      <Badge
        classes={{
          badge: classes.badge,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        overlap={'circle'}
        invisible={!registered}
        variant="dot"
      >
        <MaterialAvatar
          data-testid={testId}
          src={image}
          alt={alt}
          className={classNames(classes.root, { [classes.iconOutline]: !image }, className)}
        >
          <Icon
            className={classes.icon}
            size={size}
            name={type === 'person' ? 'person-outline' : 'company'}
            testId={'fallback-icon'}
          />
        </MaterialAvatar>
        {editable && onClick && <Icon className={classes.editOverlay} name={'edit'} testId={`${testId}-edit-icon`} />}
      </Badge>
    </Tooltip>
  );
};

export default Avatar;
