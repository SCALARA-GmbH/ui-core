import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Typography } from '../../index';
import Button from '../Button';
import { useTheme } from '../ThemeProvider/styles';

import { Popover } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [withKnobs],
};

export const PopoverStory = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElInfo, setAnchorElInfo] = React.useState<null | HTMLElement>(null);
  const [anchorElMin, setAnchorElMin] = React.useState<null | HTMLElement>(null);

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  const handleClick = () => {
    setAnchorEl(anchorEl ? null : ref1.current);
  };

  const handleClickInfo = () => {
    setAnchorElInfo(anchorElInfo ? null : ref2.current);
  };

  const handleClickMin = () => {
    setAnchorElMin(anchorElMin ? null : ref3.current);
  };

  const open = Boolean(anchorEl);
  const openInfo = Boolean(anchorElInfo);
  const openMin = Boolean(anchorElMin);

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
      }}
    >
      <div style={{ backgroundColor: theme.colors.background.primary, display: 'flex', padding: '12px' }} ref={ref1}>
        <Button label={'Toggle neutral Popover'} variant={'contained'} type="button" onClick={handleClick} />
        <Popover open={open} anchorElement={anchorEl}>
          Mit SCALARA wollen wir Hausverwaltern eine umfangreiche, moderne, aber erschwingliche Software zur Verfügung
          stellen, damit sie die Vorteile der Digitalisierung nutzen können. Das Team von SCALARA kombiniert Erfahrung
          aus dem Verwalteralltag mit dem IT-Know How eines innovativen Tech- Unternehmens. Dabei haben wir immer die
          Bedürfnisse aller Beteiligten der Immobilienverwaltung im Blick: Durch ihre Verbindung und neu gewonnene
          Transparenz soll Vertrauen untereinander geschaffen werden.
        </Popover>
      </div>
      <div style={{ backgroundColor: theme.colors.background.primary, display: 'flex', padding: '12px' }} ref={ref2}>
        <Button label={'Toggle info Popover'} variant={'contained'} type="button" onClick={handleClickInfo} />
        <Popover open={openInfo} anchorElement={anchorElInfo} variant={'info'}>
          <>
            Schalten Sie zunächst Ihr
            <br /> Hauptbuch frei
          </>
        </Popover>
      </div>
      <div style={{ backgroundColor: theme.colors.background.primary, display: 'flex', padding: '12px' }} ref={ref3}>
        <Button label={'Toggle small Popover'} variant={'contained'} type="button" onClick={handleClickMin} />
        <Popover open={openMin} anchorElement={anchorElMin} variant={'info'}>
          SCALARA
        </Popover>
      </div>
    </div>
  );
};
PopoverStory.storyName = 'Overview';

const Labels = ['Accounts', 'Transactions', 'Business plan', 'Fiscal year'] as const;
type LabelTypes = typeof Labels;
export type Label = LabelTypes[number];

export const PopoverVisualTestStory = (): JSX.Element => {
  const theme = useTheme();

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    setAnchorEl1(ref1.current);
  }, [ref1.current]);
  React.useEffect(() => {
    setAnchorEl2(ref2.current);
  }, [ref2.current]);
  React.useEffect(() => {
    setAnchorEl3(ref3.current);
  }, [ref3.current]);

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{ backgroundColor: theme.colors.background.primary, display: 'flex', width: '640px', padding: '12px' }}
        ref={ref1}
      >
        <Typography>long text</Typography>

        {anchorEl1 && (
          <Popover open anchorElement={anchorEl1} testId={'visual'}>
            Mit SCALARA wollen wir Hausverwaltern eine umfangreiche, moderne, aber erschwingliche Software zur Verfügung
            stellen, damit sie die Vorteile der Digitalisierung nutzen können. Das Team von SCALARA kombiniert Erfahrung
            aus dem Verwalteralltag mit dem IT-Know How eines innovativen Tech- Unternehmens. Dabei haben wir immer die
            Bedürfnisse aller Beteiligten der Immobilienverwaltung im Blick: Durch ihre Verbindung und neu gewonnene
            Transparenz soll Vertrauen untereinander geschaffen werden.
          </Popover>
        )}
      </div>

      <div
        style={{ backgroundColor: theme.colors.background.primary, display: 'flex', width: '640px', padding: '12px' }}
        ref={ref2}
      >
        <Typography>info variant</Typography>
        {anchorEl2 && (
          <Popover open anchorElement={anchorEl2} variant={'info'}>
            <>
              Schalten Sie zuerst Ihr
              <br /> Hauptbuch frei
            </>
          </Popover>
        )}
      </div>

      <div
        style={{ backgroundColor: theme.colors.background.primary, display: 'flex', width: '640px', padding: '12px' }}
        ref={ref3}
      >
        <Typography>small text</Typography>
        {anchorEl3 && (
          <Popover open anchorElement={anchorEl3} variant={'info'}>
            SCALARA
          </Popover>
        )}
      </div>
    </div>
  );
};
PopoverVisualTestStory.storyName = 'Visual Test';
