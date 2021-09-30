import { action, withActions } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import {
  Button,
  Dialog,
  Grid,
  makeStyles,
  Select,
  Typography,
  useTheme
} from '../..';

export default {
  title: 'Elements/Input/Select',
  component: Select,
  decorators: [withKnobs, withActions]
};

const useStyles = makeStyles(({ spacing }) => ({
  marginBottom: {
    marginBottom: spacing(2)
  }
}));

export const SelectStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const [office, setOffice] = React.useState<string>('');
  const [team, setTeam] = React.useState<string>('');
  const [teamMember, setTeamMember] = React.useState<string>('');
  const handleOfficeChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setOffice(event.target.value);
    action(event.target.value);
  };
  const handleTeamChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setTeam(event.target.value);
    action(event.target.value);
  };
  const handleTeamMemberChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setTeamMember(event.target.value);
    action(event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        minWidth: 256
      }}
    >
      <Select
        className={classes.marginBottom}
        label={'Office'}
        name={`Office-${theme.type}`}
        value={office}
        onChange={handleOfficeChange}
        placeholder={'Choose Office'}
        options={[
          {
            value: '1',
            title: 'Brühl Office'
          },
          {
            value: '2',
            title: 'Köln Office'
          }
        ]}
        required
      />
      <Select
        className={classes.marginBottom}
        label={'Teams'}
        name={`team-${theme.type}`}
        onChange={handleTeamChange}
        placeholder={'Select Team'}
        options={[
          {
            value: '1',
            title: 'The Clippies',
            subtitle: 'Iteration 1'
          },
          {
            value: '2',
            title: 'The No-Names-Yet',
            subtitle: 'Iteration 2'
          }
        ]}
        required
        value={team}
      />
      <Select
        className={classes.marginBottom}
        value={teamMember}
        placeholder={'Select Team Member...'}
        label={'Team Members'}
        name={`team-member-${theme.type}`}
        onChange={handleTeamMemberChange}
        options={[
          {
            value: '1',
            title: 'Armin Jazi',
            subtitle: 'CTO',
            avatarProps: {
              registered: true,
              image: 'armin.png'
            }
          },
          {
            value: '3',
            title: 'Elmar Hufenbach',
            avatarProps: {
              registered: true,
              image: 'elmar.jpeg'
            },
            subtitle: 'CPO'
          },
          {
            value: '4',
            title: 'Lamina Amatyakul Vedder',
            avatarProps: {
              registered: true,
              image: 'lamina.jpeg'
            },
            subtitle: 'Devops Specialist'
          },
          {
            value: '5',
            title: 'Lorem ipsum',
            avatarProps: {
              type: 'person'
            },
            subtitle: 'Lorem ipsum'
          }
        ]}
        required
      />
      <Select
        className={classes.marginBottom}
        disabled
        label={'disabled'}
        name={`disabled-${theme.type}`}
        placeholder={'disabled'}
        options={[
          {
            value: '1',
            title: 'Armin Jazi',
            subtitle: 'CTO',
            avatarProps: {
              registered: true,
              image: 'armin.png'
            }
          }
        ]}
        required
      />
      <Select
        className={classes.marginBottom}
        disabled
        label={'error'}
        name={`error-${theme.type}`}
        placeholder={'has error'}
        error
        errorText={'This selection has error'}
        options={[
          {
            value: '1',
            title: 'Shari Heep',
            subtitle: 'CEO',
            avatarProps: {
              registered: true,
              image: 'shari.png'
            }
          }
        ]}
        required
      />
    </div>
  );
};
SelectStorySBS.storyName = 'Overview';

export const SmallScreen = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('1');
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    console.log(event.target.value);
    setValue(event.target.value);
    action(event.target.value);
  };
  const [open, setOpen] = useState(false);

  const count = select('grid', [1, 2, 3, 4, 5, 6], 1);
  return (
    <div>
      <div
        style={{ backgroundColor: '#FAFAFE', padding: 16, maxWidth: '320px' }}
      >
        <Button label={'Open dialog'} onClick={() => setOpen(true)} />
        <Dialog
          title={'Title'}
          open={open}
          onClose={() => setOpen(false)}
          maxWidth={select('max width', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs')}
        >
          <Grid xs={count}>
            <Select
              value={value}
              label={'Asanas'}
              name={'asana'}
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  title: 'Adho Mukho Svanasana ( Downward Facing Dog Pose )',
                  subtitle:
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar'
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana'
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle:
                    'a standing yoga posture that strengthens the core and lower body'
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body'
                }
              ]}
            />
            <Select
              value={value}
              label={'Asanas'}
              name={'asana'}
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  title: 'Adho Mukho Svanasana ( Downward Facing Dog Pose )',
                  subtitle:
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar'
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana'
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle:
                    'a standing yoga posture that strengthens the core and lower body'
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body'
                }
              ]}
            />
            <Select
              value={value}
              label={'Asanas'}
              name={'asana'}
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  title: 'Adho Mukho Svanasana ( Downward Facing Dog Pose )',
                  subtitle:
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar'
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana'
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle:
                    'a standing yoga posture that strengthens the core and lower body'
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body'
                }
              ]}
            />
            <Typography align={'center'}>{'Patañjali '}</Typography>
            <Typography align={'center'}>
              {
                '(Sanskrit: पतञ्जलि) was a sage in ancient India, thought to be the author of a number of Sanskrit works'
              }
            </Typography>
            <Typography>
              .. Hatha is also translated as ha meaning “sun” and tha meaning
              “moon.”
            </Typography>
          </Grid>
        </Dialog>
      </div>
    </div>
  );
};

SmallScreen.storyName = 'SmallScreen';

export const SelectVisualStory = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const [office, setOffice] = React.useState<string>('');
  const handleOfficeChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setOffice(event.target.value);
    action(event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        minWidth: 256
      }}
    >
      <Select
        testId={'visual'}
        className={classes.marginBottom}
        label={'Office'}
        name={`Office-${theme.type}`}
        value={office}
        onChange={handleOfficeChange}
        placeholder={'Choose Office'}
        options={[
          {
            value: '1',
            title: 'Brühl Office'
          },
          {
            value: '2',
            title: 'Köln Office'
          },
          {
            value: '3',
            title: 'some place else'
          }
        ]}
        required
      />
    </div>
  );
};
SelectVisualStory.storyName = 'Visual';
