import * as React from 'react';

import { Avatar, Typography } from '../../index';
import { makeStyles } from '../ThemeProvider/styles';

import { SearchSelectOption } from './SearchSelect';

const useSelectedStyle = makeStyles(
  (theme) => ({
    cells: {
      paddingLeft: theme.spacing(1.5),
    },
    avatar: {
      marginRight: theme.spacing(2.5),
    },
  }),
  { name: 'SCA__SearchSelect_Default_Selected' }
);

export const DefaultSelectedComponent: React.FunctionComponent<SearchSelectOption> = ({
  cells,
  title,
  avatarProps,
}) => {
  const classes = useSelectedStyle();
  return (
    <>
      <Avatar size={'medium'} {...avatarProps} className={classes.avatar} />
      <Typography variant={'c1'}>{title}</Typography>
      <Typography color={'subtitle'} className={classes.cells} variant={'c3'}>
        {`${cells.join(', ')}`}
      </Typography>
    </>
  );
};

const useOptionStyle = makeStyles(
  (theme) => ({
    title: {
      display: 'flex',
      alignItems: 'center',
      flex: 2,
    },
    avatar: {
      marginRight: theme.spacing(2.5),
    },
    column: {
      flex: 1,
    },
  }),
  { name: 'SCA__SearchSelect_Default_Option' }
);

export const DefaultOptionComponent: React.FunctionComponent<SearchSelectOption> = ({
  cells,
  title,
  avatarProps,
}) => {
  const classes = useOptionStyle();
  return (
    <>
      <div className={classes.title}>
        <Avatar size={'medium'} {...avatarProps} className={classes.avatar} />
        <Typography variant={'c1'}>{title}</Typography>
      </div>
      {cells.map((cell) => (
        <Typography key={cell} variant={'c3'} className={classes.column}>
          {cell}
        </Typography>
      ))}
    </>
  );
};
