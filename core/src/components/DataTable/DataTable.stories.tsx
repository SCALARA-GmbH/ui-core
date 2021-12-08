import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

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
function createData(
  name: string,
  description: string,
  plan: number,
  balance: number
) {
  return { name, description, plan, balance };
}

const rows = [
  createData('Kostentragung', 'Zusatzbezeichnung', 15.33339, 65555.0),
  createData(
    'Durchlaufende Posten',
    'Zusatzbezeichnung',
    2.333137,
    999999999.0
  ),
  createData('Wartung Feuerlöscher', 'Zusatzbezeichnung', 123.262, 12316.0),
  createData('Straßenreinigung', 'Zusatzbezeichnung', 30.3335, 123.7),
  createData('Außenanlagen 1', 'Zusatzbezeichnung', 35.31236, 16.0),
  createData('Außenanlagen 2', 'Zusatzbezeichnung', 356, 165555.0),
];
export const DataTableOverviewVS = (): JSX.Element => {
  return (
    <DataTable ariaLabel={'account table'}>
      <DataTableHead>
        <DataTableRow>
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
  );
};
DataTableOverviewVS.storyName = 'Overview';
