import classNames from 'classnames';
import * as React from 'react';

import { Avatar, Typography } from '../..';
import { AvatarProps } from '../Avatar/Avatar';
import { Wrap } from '../Typography/Typography';

import { useStyles } from './styles';

export interface Props {
  avatarProps?: AvatarProps;
  className?: string;
  extra?: string;
  text: string;
  title?: string;
}

const Comment: React.FunctionComponent<Props> = ({ avatarProps, text, extra, title, className }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.avatar}>
        <Avatar size={'medium'} {...avatarProps} />
      </div>
      <div className={classes.content}>
        {title && (
          <Typography variant={'c2'} className={classNames(classes.marginRight, classes.marginBottom)}>
            {title}
          </Typography>
        )}
        {extra && (
          <Typography variant={'c2'} color={'label'} className={classes.marginBottom}>
            {extra}
          </Typography>
        )}
        <div className={classes.text}>{text && <Typography wrap={Wrap.PRESERVE_BREAK_LINES}>{text}</Typography>}</div>
      </div>
    </div>
  );
};

export default React.memo(Comment);
