import { yupResolver } from '@hookform/resolvers';
import * as React from 'react';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, Checkbox, Grid, useTheme } from '../..';

export default {
  title: 'Elements/Controls/Checkbox',
  component: Checkbox,
};

export const CheckboxStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}>
      <Checkbox style={{ padding: 8 }} name={'test'} />
      <Checkbox style={{ padding: 8 }} name={'test2'} label={'Accept the agreement'} />
      <Checkbox style={{ padding: 8 }} name={'checked'} checked label={'I am checked'} />
      <Checkbox style={{ padding: 8 }} required name={'test3'} label={'I am required'} />
      <Checkbox style={{ padding: 8 }} disabled name={'test3'} label={'I am disabled'} />
      <Checkbox style={{ padding: 8 }} disabled name={'test3'} label={'I am checked and disabled'} checked />
      <Checkbox
        style={{ padding: 8 }}
        name={'test4'}
        label={'I have an error'}
        error
        errorText={'Oh no error happened'}
      />
    </div>
  );
};
CheckboxStorySBS.storyName = 'Overview';

export const CheckFormStory = (): JSX.Element => {
  const { register, handleSubmit } = useForm<{
    test: boolean;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        test: yup.boolean().required(),
      }),
    ),
  });
  const onSubmit = (data: FormEvent) => alert(JSON.stringify(data));

  return (
    <div style={{ padding: 16 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox required ref={register} label={'Check me'} name={'test'} errorText={'This is required'} />
        <Button label={'Submit'} variant={'contained'} type="submit" />
      </form>
    </div>
  );
};
CheckFormStory.storyName = 'Form';

export const CheckFormDefaultValueStory = (): JSX.Element => {
  const { register, handleSubmit } = useForm<{
    test: boolean;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        test: yup.boolean().required(),
      }),
    ),
    defaultValues: {
      test: true,
    },
  });
  const onSubmit = (data: FormEvent) => alert(JSON.stringify(data));

  return (
    <Grid xs={1} style={{ padding: 16 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox required ref={register} label={'Checked by default'} name={'test'} errorText={'This is required'} />
        <Button label={'Submit'} variant={'contained'} type="submit" />
      </form>
    </Grid>
  );
};
CheckFormDefaultValueStory.storyName = 'Form with default value';
