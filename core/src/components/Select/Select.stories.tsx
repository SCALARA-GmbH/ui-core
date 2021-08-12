import { action, withActions } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Button, Dialog, Grid, Select, Typography, useTheme } from '../..';

export default {
  title: 'Elements/Input/Select',
  component: Select,
  decorators: [withKnobs, withActions],
};

export const SelectStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = React.useState<string>('1');
  const handleChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    console.log(event.target.value);
    setValue(event.target.value);
    action(event.target.value);
  };
  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 16, minWidth: 256 }}>
      <Select
        value={value}
        label={'Team Members'}
        name={'salutation'}
        onChange={handleChange}
        options={[
          {
            value: '1',
            title: 'Armin Jazi',
            subtitle: 'CTO',
            avatarProps: {
              registered: true,
              image:
                'https://media-exp1.licdn.com/dms/image/C4D03AQHOVO2QjkzNEA/profile-displayphoto-shrink_200_200/0/1581937441755?e=1612396800&v=beta&t=28v-zA2TLatECb9OnybCacuw1bSbz-6qqohADJ633Ns',
            },
          },
          {
            value: '2',
            title: 'Sascha Becker',
            avatarProps: {
              registered: true,
              image:
                'https://media-exp1.licdn.com/dms/image/C4D03AQGrFXISv4g-gg/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=r_qp5IeojHdjudhN0GtU3dW6kYX_uPcFdzghCCswFzc',
            },
            subtitle: 'Frontend Hero',
          },
          {
            value: '3',
            title: 'Elmar Hufenbach',
            avatarProps: {
              registered: true,
              image:
                'https://media-exp1.licdn.com/dms/image/C4D03AQE0WGsrMkyfKg/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=eHT24e-nVE3LqC1OoRhhBx_G0qYIXAMWPggj2dAfcMY',
            },
            subtitle: 'CPO',
          },
          {
            value: '4',
            title: 'Lamina Amatyakul Vedder',
            avatarProps: {
              registered: true,
              image:
                'https://media-exp1.licdn.com/dms/image/C4D03AQGJV4a4kX-SxQ/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=ykwN2F1R7WPItq5EF_X7bnciU7jPmguVxULLiPp-q5E',
            },
            subtitle: 'Devops Specialist',
          },
          {
            value: '5',
            title: 'Lorem ipsum',
            avatarProps: {
              type: 'person',
            },
            subtitle: 'Lorem ipsum',
          },
          {
            value: '5',
            title: 'Lorem ipsum',
            avatarProps: {
              type: 'company',
            },
            subtitle: 'Lorem ipsum',
          },
        ]}
        required
      />
    </div>
  );
};
SelectStorySBS.storyName = 'Overview';

export const SmallScreen = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('1');
  const handleChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    console.log(event.target.value);
    setValue(event.target.value);
    action(event.target.value);
  };
  const [open, setOpen] = useState(false);

  const count = select('grid', [1, 2, 3, 4, 5, 6], 1);
  return (
    <div>
      <div style={{ backgroundColor: '#FAFAFE', padding: 16, maxWidth: '320px' }}>
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
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar',
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana',
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle: 'a standing yoga posture that strengthens the core and lower body',
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body',
                },
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
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar',
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana',
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle: 'a standing yoga posture that strengthens the core and lower body',
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body',
                },
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
                    'an inversion asana practised as part of a flowing sequence of poses, especially Surya Namaskar',
                },
                {
                  value: '2',
                  title: 'Trikonasana ( Triangle Pose )',
                  subtitle:
                    'The name comes from the Sanskrit words utthita (उत्थित), "extended", trikoṇa (त्रिकोण) "triangle", and āsana',
                },
                {
                  value: '3',
                  title: 'Utkatasana (Chair Pose)',
                  subtitle: 'a standing yoga posture that strengthens the core and lower body',
                },
                {
                  value: '4',
                  title: 'Paschimottanasana ( Seated Forward Bend )',
                  subtitle:
                    'The name comes from the Sanskrit words paschima (पश्चिम, paścima) meaning "west" or "the back of the body',
                },
              ]}
            />
            <Typography align={'center'}>{'Patañjali '}</Typography>
            <Typography align={'center'}>
              {
                '(Sanskrit: पतञ्जलि) was a sage in ancient India, thought to be the author of a number of Sanskrit works'
              }
            </Typography>
            <Typography>.. Hatha is also translated as ha meaning “sun” and tha meaning “moon.”</Typography>
          </Grid>
        </Dialog>
      </div>
    </div>
  );
};

SmallScreen.storyName = 'SmallScreen';
