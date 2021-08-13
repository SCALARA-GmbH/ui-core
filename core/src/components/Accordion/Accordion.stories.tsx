import { action, withActions } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import AccordionItem from '../AccordionItem';
import Button from '../Button';
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableRow
} from '../DataTable';
import DataTableHeadTextCell from '../DataTable/DataTableHeadTextCell';
import CountIcon from '../Icon/CountIcon';
import { useTheme } from '../ThemeProvider/styles';
import Typography from '../Typography';

import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [withKnobs, withActions],
  parameters: {
    grid: {
      gridOn: false,
      columns: 12,
      maxWidth: '1064px',
      gap: '22px',
      gutterLeft: '16px',
      gutterRight: '16px'
    }
  }
};

const renderItems = () => (
  <>
    <AccordionItem onClick={action('end')}>
      <Typography> has hover and onclick </Typography>
    </AccordionItem>
    <AccordionItem>
      <Typography variant={'c1'}>
        {text(
          'item2',
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
        )}
      </Typography>
    </AccordionItem>
    <AccordionItem>
      <Typography variant={'c1'}>
        {text(
          'item3',
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
        )}
      </Typography>
    </AccordionItem>
    <AccordionItem>
      <Button hierarchy={'primary'} label={'click me'} />
    </AccordionItem>
  </>
);

export const AccordionStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        minWidth: '512px'
      }}
    >
      <div style={{ padding: 16 }}>
        <Accordion title={'Title'}>{renderItems()}</Accordion>
        <Accordion initiallyOpen title={'Initially open'}>
          {renderItems()}
        </Accordion>
        <Accordion
          title={'With action'}
          actionButtonProps={{ iconName: 'contact-data' }}
        >
          {renderItems()}
        </Accordion>
      </div>
      <div style={{ padding: 16 }}>
        <Accordion
          header={
            <Typography color={'primary'}>
              {text('Header', 'Custom Header')}
            </Typography>
          }
        >
          {renderItems()}
        </Accordion>
        <Accordion
          header={
            <Typography color={'secondary'}>
              {text('Header', 'Custom Header')}
            </Typography>
          }
          title={'Title'}
        >
          {renderItems()}
        </Accordion>
        <Accordion>{renderItems()}</Accordion>
      </div>
    </div>
  );
};
AccordionStory.storyName = 'Overview';

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
  createData('Außenanlagen 2', 'Zusatzbezeichnung', 356, 165555.0)
];

const CustomHeader = ({ count, title }: { count: number; title: string }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <CountIcon count={count} />
      <Typography selectable={false} variant={'t2'}>
        {title}
      </Typography>
    </div>
  );
};

export const AccordionTableStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: '16px'
      }}
    >
      <Accordion
        header={<CustomHeader count={1} title={'Account Type'} />}
        initiallyOpen
      >
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
      </Accordion>
      <Accordion header={<CustomHeader count={2} title={'Account Type'} />}>
        <DataTable ariaLabel={'2 account table'}>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadTextCell text={'Konto'} />
              <DataTableHeadTextCell text={'Zusatzbezeichnung'} />
              <DataTableHeadTextCell text={'Planwert in €'} />
              <DataTableHeadTextCell text={'Kontostand in €'} />
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
                  content={row.plan}
                  align="right"
                />
                <DataTableCell
                  contentVariant={'c1'}
                  content={row.balance}
                  align="right"
                />
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTable>
      </Accordion>
    </div>
  );
};
AccordionTableStory.storyName = 'Table';

export const AccordionTableVisualTestStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: '16px'
      }}
      data-testid={'visual'}
    >
      <Accordion header={<CustomHeader count={1} title={'Account Type'} />}>
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
      </Accordion>
    </div>
  );
};
AccordionTableVisualTestStory.storyName = 'Table Visual Test';

export const AccordionResponsiveStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Accordion
        title={
          'Responsive: Almost before we knew it, we had left the ground. Because the title was really long. Making sure it was breaking on multiple lines Making sure it was breaking on multiple lines'
        }
      >
        {renderItems()}
      </Accordion>
    </div>
  );
};
AccordionResponsiveStory.storyName = 'Responsive';
