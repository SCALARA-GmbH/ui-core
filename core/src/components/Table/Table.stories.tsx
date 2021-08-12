import { createStyles } from '@material-ui/core';
import * as React from 'react';

import { Avatar, makeStyles, Paper, Table, TableCell, TableRow, useTheme } from '../..';

export default {
  title: 'Components/Table',
  component: Table,
};

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    avatar: {
      paddingRight: spacing(1),
    },
    withAvatar: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  }),
);

export const TableStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 24 }}>
      <Paper>
        <Table>
          <TableRow>
            <TableCell title={'Banana'} subtitle={'Fruit'} />
            <TableCell title={'12g Sugar'} subtitle={'Tasty Sweet'} />
            <TableCell title={'89 calories'} subtitle={'Sweet devil'} />
          </TableRow>
          <TableRow>
            <TableCell title={'Apple'} subtitle={'Fruit'} />
            <TableCell title={'10g Sugar'} subtitle={'Red sweet and tasty'} />
            <TableCell title={'52 calories'} subtitle={'Nearly as banana?'} />
          </TableRow>
          <TableRow>
            <TableCell title={'Potato'} subtitle={'Vegetable'} />
            <TableCell subtitle={'It is very little'} />
            <TableCell title={'77 calories'} subtitle={'Better apple diet'} />
          </TableRow>
        </Table>
      </Paper>
    </div>
  );
};
TableStorySBS.storyName = 'Overview';

export const TableClickStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 24 }}>
      <Paper>
        <Table>
          <TableRow onClick={() => console.log('onClick')}>
            <TableCell title={'Banana'} subtitle={'Fruit'} />
            <TableCell title={'12g Sugar'} subtitle={'Tasty Sweet'} />
            <TableCell title={'89 calories'} subtitle={'Sweet devil'} />
          </TableRow>
          <TableRow onClick={() => console.log('onClick')}>
            <TableCell title={'Apple'} subtitle={'Fruit'} />
            <TableCell title={'10g Sugar'} subtitle={'Red sweet and tasty'} />
            <TableCell title={'52 calories'} subtitle={'Nearly as banana?'} />
          </TableRow>
          <TableRow onClick={() => console.log('onClick')}>
            <TableCell title={'Potato'} subtitle={'Vegetable'} />
            <TableCell subtitle={'It is very little'} />
            <TableCell title={'77 calories'} subtitle={'Better apple diet'} />
          </TableRow>
        </Table>
      </Paper>
    </div>
  );
};
TableClickStorySBS.storyName = 'Clickable';

export const TableCustomCellStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 24 }}>
      <Paper>
        <Table>
          <TableRow onClick={() => console.log('onClick')}>
            <TableCell title={'Piotr'} subtitle={'Milobedzki'} hideTitle className={classes.withAvatar}>
              <div className={classes.avatar}>
                <Avatar
                  onClick={() => console.log('click')}
                  image={
                    'https://avatars3.githubusercontent.com/u/26150100?s=400&u=239b56c3e8a8d95c7dd804aee24d782b89a92c84&v=4'
                  }
                  size={'small'}
                />
              </div>
            </TableCell>
            <TableCell title={'Piotr'} subtitle={'Milobedzki'} hideSubtitle className={classes.withAvatar}>
              <div className={classes.avatar}>
                <Avatar
                  onClick={() => console.log('click')}
                  image={
                    'https://avatars3.githubusercontent.com/u/26150100?s=400&u=239b56c3e8a8d95c7dd804aee24d782b89a92c84&v=4'
                  }
                  size={'small'}
                />
              </div>
            </TableCell>
            <TableCell title={'Piotr'} subtitle={'Milobedzki'} hideSubtitle hideTitle className={classes.withAvatar}>
              <div className={classes.avatar}>
                <Avatar
                  onClick={() => console.log('click')}
                  image={
                    'https://avatars3.githubusercontent.com/u/26150100?s=400&u=239b56c3e8a8d95c7dd804aee24d782b89a92c84&v=4'
                  }
                  size={'small'}
                />
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </Paper>
    </div>
  );
};
TableCustomCellStorySBS.storyName = 'Custom Cells';

export const PreserveHeightStory = (): JSX.Element => (
  <div style={{ padding: 24 }}>
    <Paper>
      <Table>
        <TableRow>
          <TableCell title={'Value 1'} subtitle={'Meta 1'} />
          <TableCell title={'Value 2'} subtitle={'Meta 2'} />
          <TableCell subtitle={'Meta 3'} />
        </TableRow>
        <TableRow>
          <TableCell title={'Value 1'} />
          <TableCell title={'Value 2'} subtitle={'Meta 2'} />
          <TableCell title={'Value 3'} subtitle={'Meta 3'} />
        </TableRow>
        <TableRow>
          <TableCell title={'Value 1'} subtitle={'Meta 1'} />
          <TableCell subtitle={'Meta 2'} />
          <TableCell title={'Value 3'} subtitle={'Meta 3'} />
        </TableRow>
      </Table>
    </Paper>
  </div>
);
PreserveHeightStory.storyName = 'Preserve Height';

export const TableRowActionStory = (): JSX.Element => (
  <div style={{ padding: 24 }}>
    <Paper>
      <Table>
        <TableRow
          actionIconButtonProps={{ iconName: 'close', onClick: () => alert('clicked icon button') }}
          onClick={() => alert('clicked row')}
        >
          <TableCell title={'Value 1'} subtitle={'Meta 1'} />
          <TableCell title={'Value 2'} subtitle={'Meta 2'} />
          <TableCell subtitle={'Meta 3'} />
        </TableRow>
        <TableRow
          actionIconButtonProps={{ iconName: 'close', onClick: () => alert('clicked icon button') }}
          onClick={() => alert('clicked row')}
        >
          <TableCell title={'Value 1'} />
          <TableCell title={'Value 2'} subtitle={'Meta 2'} />
          <TableCell title={'Value 3'} subtitle={'Meta 3'} />
        </TableRow>
        <TableRow
          actionIconButtonProps={{ iconName: 'close', onClick: () => alert('clicked icon button') }}
          onClick={() => alert('clicked row')}
        >
          <TableCell title={'Value 1'} subtitle={'Meta 1'} />
          <TableCell subtitle={'Meta 2'} />
          <TableCell title={'Value 3'} subtitle={'Meta 3'} />
        </TableRow>
      </Table>
    </Paper>
  </div>
);
TableRowActionStory.storyName = 'Row Action';

export const MobileStory = (): JSX.Element => (
  <Paper>
    <Table>
      <TableRow>
        <TableCell hideOnMobile title={'Value 1'} />
        <TableCell title={'Value 2'} />
        <TableCell title={'Value 3'} />
      </TableRow>
      <TableRow>
        <TableCell hideOnMobile title={'Value 1'} />
        <TableCell title={'Value 2'} />
        <TableCell title={'Value 3'} />
      </TableRow>
      <TableRow>
        <TableCell hideOnMobile title={'Value 1'} />
        <TableCell title={'Value 2'} />
        <TableCell title={'Value 3'} />
      </TableRow>
    </Table>
  </Paper>
);
MobileStory.storyName = 'Mobile';
