import { createStyles } from '@material-ui/core';
import * as React from 'react';

import { Area, Frame, makeStyles, Theme, Typography, useTheme } from '../../..';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: '1fr',
      padding: spacing(2),
    },
    block: {
      display: 'flex',
    },
    color: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: spacing(2),
    },
    palette: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: spacing(2),
      borderLeft: `2px solid`,
    },
    stripe: {
      display: 'flex',
      flexDirection: 'column',
    },
    stripePart: {
      padding: spacing(0.5),
    },
  })
);

const ThemeDemo: React.FunctionComponent = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Frame
      className={classes.root}
      style={{ backgroundColor: theme.colors.background.primary }}
      orientation={'vertical'}
    >
      <Area className={classes.block} elevated>
        <div className={classes.palette}>
          <Typography>Primary</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.primary.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.primary.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.primary[75]}` }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.primary[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.primary[50]}` }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.primary[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Secondary</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.secondary.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.secondary.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.secondary[75]}`,
              }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.secondary[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.secondary[50]}`,
              }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.secondary[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Tertiary</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.tertiary.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.tertiary.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.tertiary[75]}` }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.tertiary[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.tertiary[50]}` }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.tertiary[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Destructive</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.destructive.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.destructive.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.destructive[75]}`,
              }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.destructive[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.destructive[50]}`,
              }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.destructive[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Required Instruction</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.requiredInstruction.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.requiredInstruction.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.requiredInstruction[75]}`,
              }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.requiredInstruction[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.requiredInstruction[50]}`,
              }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.requiredInstruction[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Optional Instruction</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.optionalInstruction.default}`,
              }}
            >
              <Typography variant={'c3'}>
                main <br /> {theme.colors.optionalInstruction.default}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.optionalInstruction[75]}`,
              }}
            >
              <Typography variant={'c3'}>
                75 <br /> {theme.colors.optionalInstruction[75]}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{
                borderRight: `40px solid ${theme.colors.optionalInstruction[50]}`,
              }}
            >
              <Typography variant={'c3'}>
                50 <br /> {theme.colors.optionalInstruction[50]}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.palette}>
          <Typography>Neutrals</Typography>
          <div className={classes.stripe}>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['0']}` }}
            >
              <Typography variant={'c3'}>
                0 <br /> {theme.colors.neutral['0']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['1']}` }}
            >
              <Typography variant={'c3'}>
                1 <br /> {theme.colors.neutral['1']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['2']}` }}
            >
              <Typography variant={'c3'}>
                2 <br /> {theme.colors.neutral['2']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['3']}` }}
            >
              <Typography variant={'c3'}>
                3 <br /> {theme.colors.neutral['3']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['4']}` }}
            >
              <Typography variant={'c3'}>
                4 <br /> {theme.colors.neutral['4']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['5']}` }}
            >
              <Typography variant={'c3'}>
                5 <br /> {theme.colors.neutral['5']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['6']}` }}
            >
              <Typography variant={'c3'}>
                6 <br /> {theme.colors.neutral['6']}
              </Typography>
            </div>
            <div
              className={classes.stripePart}
              style={{ borderRight: `40px solid ${theme.colors.neutral['7']}` }}
            >
              <Typography variant={'c3'}>
                7 <br /> {theme.colors.neutral['7']}
              </Typography>
            </div>
          </div>
        </div>
      </Area>
    </Frame>
  );
};

export default ThemeDemo;
