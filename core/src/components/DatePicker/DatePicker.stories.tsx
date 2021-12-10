import { yupResolver } from '@hookform/resolvers';
import * as React from 'react';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { DatePicker, Button, Grid, useTheme } from '../..';

export default {
  title: 'Elements/Input/DatePicker',
  component: DatePicker,
};

export const DatePickerStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <DatePicker
        onChange={(date) => alert(date)}
        label={'Date'}
        name={'date'}
      />
      <DatePicker
        onChange={(date) => alert(date)}
        label={'Date'}
        name={'date'}
        required
      />
    </div>
  );
};
DatePickerStorySBS.storyName = 'Overview';

export const DatePickerStoryDisableDate = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <DatePicker
        onChange={(date) => alert(date)}
        label={'Date'}
        name={'date'}
        shouldDisableDate={(day) => {
          const dayNumber = day.getDate();
          return dayNumber < 10;
        }}
      />
    </div>
  );
};
DatePickerStoryDisableDate.storyName = 'shouldDisableDate';

export const FormStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const { handleSubmit, register, setValue, watch } = useForm<{
    start: Date;
    end: Date;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        start: yup.date().required(),
        end: yup.date().nullable(),
      })
    ),
    defaultValues: {
      start: new Date(),
    },
  });

  React.useEffect(() => {
    register('start');
    register('end');
  }, []);

  const onSubmit = (data: FormEvent) => alert(JSON.stringify(data));

  const handleStartChange = (date: Date | null) => {
    setValue('start', date);
  };

  const handleEndChange = (date: Date | null) => {
    setValue('end', date);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        maxWidth: 500,
      }}
    >
      <Grid xs={2}>
        <DatePicker
          required
          onChange={handleStartChange}
          label={'Start'}
          name={'start'}
          maxDate={watch('end')}
          value={watch('start')}
        />
        <DatePicker
          onChange={handleEndChange}
          label={'End'}
          name={'end'}
          minDate={watch('start')}
          value={watch('end')}
        />
      </Grid>
      <Button variant={'contained'} type="submit" label="Submit" />
    </form>
  );
};
FormStorySBS.storyName = 'Form';
