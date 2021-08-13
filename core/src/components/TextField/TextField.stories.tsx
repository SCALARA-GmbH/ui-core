import { yupResolver } from '@hookform/resolvers';
import * as React from 'react';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, makeStyles, TextField, useTheme } from '../..';
import Grid from '../Grid';
import IconButton from '../IconButton';

export default {
  title: 'Elements/Input/TextField',
  component: TextField
};

const useStyles = makeStyles(
  ({ spacing }) => ({
    padding: {
      padding: spacing(1)
    }
  }),
  { name: 'SCA__TextFieldStory' }
);

export const TextFieldStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        minWidth: 384,
        padding: 16
      }}
    >
      <TextField
        placeholder={'Placeholder'}
        className={classes.padding}
        name={'test'}
      />
      <TextField
        label={'Label'}
        placeholder={'Placeholder'}
        className={classes.padding}
        name={'test2'}
      />
      <TextField
        name={'test3'}
        helperText={'I am a helper text'}
        label={'Label'}
        placeholder={'Placeholder'}
        className={classes.padding}
      />
      <TextField
        name={'test4'}
        disabled
        helperText={'I am a disabled'}
        label={'Label'}
        placeholder={'Placeholder'}
        className={classes.padding}
      />
      <TextField
        name={'test5'}
        error
        errorText={'This is an error'}
        label={'Label'}
        placeholder={'Placeholder'}
        className={classes.padding}
      />
    </div>
  );
};
TextFieldStorySBS.storyName = 'Overview';

export const TextFieldVisualInputStory = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        minWidth: 384,
        padding: 16
      }}
    >
      <TextField
        helperText={'I am a helper text'}
        label={'Label'}
        name={'input'}
        placeholder={'Placeholder'}
        className={classes.padding}
      />
    </div>
  );
};
TextFieldVisualInputStory.storyName = 'Visual Input';

export const AdornmentStory = (): JSX.Element => (
  <div style={{ padding: 16 }}>
    <TextField
      label={'Currency'}
      placeholder={'12.34€'}
      name={'test'}
      endAdornment={<IconButton iconName={'close'} />}
    />
  </div>
);
AdornmentStory.storyName = 'Adornments';

export const TextareaFormStory = (): JSX.Element => (
  <div style={{ padding: 16 }}>
    <TextField
      placeholder={'Write something really long with multiple lines'}
      label={'Textarea'}
      multiline
      name={'test'}
    />
  </div>
);
TextareaFormStory.storyName = 'Textarea';

export const LoginFormStory = (): JSX.Element => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
      })
    )
  });
  const onSubmit = (data: FormEvent) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.padding}>
      <TextField
        label={'E-Mail'}
        name={'email'}
        placeholder={'max@mustermann.de'}
        required
        type="email"
        ref={register}
      />
      <TextField
        label={'Passwort'}
        name={'password'}
        required
        type="password"
        ref={register}
      />
      <Button variant={'contained'} type="submit" label="Login" />
    </form>
  );
};
LoginFormStory.storyName = 'LoginForm';

export const ValidationFormStory = (): JSX.Element => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<{
    phone: string;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        phone: yup.string().required()
      })
    )
  });
  const onSubmit = (data: { phone: string }) => alert(data.phone);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.padding}>
      <TextField
        label={'German phone'}
        name={'phone'}
        placeholder={'+49 511 123456'}
        required
        type="tel"
        ref={register}
        errorText={'This is not a german phone number'}
        pattern={'\\(?\\+\\(?49\\)?[ ()]?([- ()]?\\d[- ()]?)*'}
      />
      <Button variant={'contained'} type="submit" label="Check" />
    </form>
  );
};
ValidationFormStory.storyName = 'Validation';

export const AccountFormStory = (): JSX.Element => {
  const theme = useTheme();
  const { register, handleSubmit } = useForm<{
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    addressLine?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        firstName: yup.string(),
        lastName: yup.string(),
        phone: yup.string(),
        addressLine: yup.string(),
        postalCode: yup.string(),
        city: yup.string(),
        country: yup.string()
      })
    ),
    defaultValues: {
      firstName: 'Max',
      lastName: 'Mustermann'
    }
  });
  const onSubmit = (data: FormEvent) => alert(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Grid xs={2}>
        <TextField
          label={'E-Mail'}
          name={'email'}
          placeholder={'max@mustermann.de'}
          required
          type="email"
          ref={register}
        />
        <TextField
          label={'Firstname'}
          name={'firstName'}
          placeholder={'test placeholder'}
          ref={register}
        />
        <TextField label={'Lastname'} name={'lastName'} ref={register} />
        <TextField label={'Phone'} name={'phone'} type="tel" ref={register} />
        <TextField label={'Address'} name={'addressLine'} ref={register} />
        <TextField label={'PostalCode'} name={'postalCode'} ref={register} />
        <TextField label={'City'} name={'city'} ref={register} />
        <TextField label={'Country'} name={'country'} ref={register} />
        <Button variant={'contained'} type="submit" label="Login" />
      </Grid>
    </form>
  );
};
AccountFormStory.storyName = 'AccountForm';
