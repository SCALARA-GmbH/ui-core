import { Avatar as MaterialAvatar, Tooltip } from '@mui/material';
import cx from 'classnames';
import * as React from 'react';

import { Size } from '../../types';
import { Icon } from '../Icon';
import { useTheme } from '../ThemeProvider/styles';

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
  const theme = useTheme();

  return (
    <Tooltip title={tooltip} onClick={onClick}>
      <div className={classes.root} data-testid={testId}>
        <MaterialAvatar
          src={image}
          alt={alt}
          className={cx(
            classes.avatar,
            { [classes.fallback]: !image, [classes.image]: !!image },
            className
          )}
        >
          <Icon
            className={cx(classes.icon, {
              [classes.registered]: registered,
              [classes.unregistered]: !registered,
            })}
            outlineColor={theme.colors.neutral['5']}
            backgroundColor={
              registered
                ? theme.colors.secondary['50']
                : theme.colors.neutral['6']
            }
            size={size}
            name={type}
            testId={'fallback-icon'}
          />
        </MaterialAvatar>
        {editable && onClick && (
          <Icon
            className={cx(classes.editOverlay)}
            name={'edit'}
            testId={`${testId}-edit-icon`}
            size={'large'}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default Avatar;
