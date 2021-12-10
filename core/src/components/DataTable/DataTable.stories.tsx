import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { makeStyles, useTheme } from '../ThemeProvider/styles';

import {
  DataTable,
  DataTableHead,
  DataTableRow,
  DataTableHeadTextCell,
  DataTableBody,
  DataTableCell,
} from './';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  decorators: [withKnobs, withActions],
};

const useStyles = makeStyles(
  () => ({
    root: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
  }),
  { name: 'SCA__DataTable' }
);

const rows = [
  {
    name: 'Kostentragung',
    description: 'Zusatzbezeichnung',
    plan: 15.33339,
    balance: 65555.0,
  },
  {
    name: 'Kostentragung1',
    description: 'Zusatzbezeichnung1',
    plan: 15.33339,
    balance: 65555.0,
  },
  {
    name: 'Kostentragung2',
    description: 'Zusatzbezeichnung2',
    plan: 15.33339,
    balance: 65555.0,
  },
  {
    name: 'Kostentragung3',
    description: 'Zusatzbezeichnung3',
    plan: 15.33339,
    balance: 65555.0,
  },
];
export const DataTableOverviewVS = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        width: '100%',
      }}
    >
      <DataTable ariaLabel={'account table'}>
        <DataTableHead>
          <DataTableRow className={classes.root}>
            <DataTableHeadTextCell widthPercentage={33} text={'Konto'} />
            <DataTableHeadTextCell
              widthPercentage={33}
              text={'Zusatzbezeichnung'}
            />
            <DataTableHeadTextCell
              widthPercentage={17}
              align={'right'}
              text={'Planwert in €'}
            />
            <DataTableHeadTextCell
              widthPercentage={17}
              align={'right'}
              text={'Kontostand in €'}
            />
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          {rows.map((row) => (
            <DataTableRow key={row.name}>
              <DataTableCell
                contentVariant={'c2'}
                content={row.name}
                align="left"
              />
              <DataTableCell
                contentVariant={'c3'}
                content={row.description}
                align="left"
              />
              <DataTableCell
                contentVariant={'c3'}
                content={row.plan.toLocaleString('de')}
                align="right"
              />
              <DataTableCell
                contentVariant={'c1'}
                content={row.balance.toLocaleString('de')}
                align="right"
              />
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTable>
    </div>
  );
};
DataTableOverviewVS.storyName = 'Overview';
