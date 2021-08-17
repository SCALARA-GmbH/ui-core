import * as React from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';
import { makeStyles } from '../ThemeProvider/styles';

interface Props {
  name: IconName;
}

const useStyles = makeStyles(
  ({ spacing, colors }) => ({
    icon: {
      background: colors.secondary['50'],
      borderRadius: '50%',
      padding: spacing(3),
      color: colors.secondary.default,
      overflow: 'overlay'
    }
  }),
  { name: 'SCA__IconBubble' }
);

const IconBubble: React.FunctionComponent<Props> = ({ name }) => {
  const classes = useStyles();
  return <Icon name={name} size="medium" className={classes.icon} />;
};

export default IconBubble;
