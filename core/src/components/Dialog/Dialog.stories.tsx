import * as React from 'react';

import { Button, Dialog, DialogActions, Typography, useDialog } from '../..';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const DialogStory = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ padding: 16 }}>
      <Button
        hierarchy={'primary'}
        onClick={() => setOpen(true)}
        label={'Open Dialog'}
      />
      <Dialog
        fullScreen
        onClose={() => setOpen(false)}
        open={open}
        title={'Title'}
      >
        <Typography variant={'c3'}>Hi I am content</Typography>
        <DialogActions onSubmit={() => setOpen(false)} />
      </Dialog>
    </div>
  );
};
DialogStory.storyName = 'Overview';

export const IconBubbleDialogStory = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ padding: 16 }}>
      <Button
        hierarchy={'primary'}
        onClick={() => setOpen(true)}
        label={'Open Dialog'}
      />
      <Dialog
        fullScreen
        onClose={() => setOpen(false)}
        open={open}
        title={'Title'}
        subtitle={'La baguette'}
        titleIcon={'cashbox'}
      >
        <Typography variant={'c3'}>Hi I am content</Typography>
        <DialogActions onSubmit={() => setOpen(false)} />
      </Dialog>
    </div>
  );
};
IconBubbleDialogStory.storyName = 'Dialog with Iconbubble';

export const DialogDeleteStory = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ padding: 16 }}>
      <Button
        hierarchy={'primary'}
        onClick={() => setOpen(true)}
        label={'Open Delete Dialog'}
      />
      <Dialog
        fullScreen
        onClose={() => setOpen(false)}
        open={open}
        title={'Title'}
      >
        <Typography>Hi I am content</Typography>
        <DialogActions
          onCancel={() => setOpen(false)}
          onDelete={() => setOpen(false)}
          onSubmit={() => setOpen(false)}
        />
      </Dialog>
    </div>
  );
};
DialogDeleteStory.storyName = 'Delete Action';

export const StepDialogStory = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);

  return (
    <div style={{ padding: 16 }}>
      <Button
        hierarchy={'primary'}
        onClick={() => setOpen(true)}
        label={'Open Stepper Dialog'}
      />
      <Dialog
        fullScreen
        onBack={step > 0 ? () => setStep((prev) => prev - 1) : undefined}
        onClose={() => setOpen(false)}
        open={open}
        title={'Title'}
      >
        <Typography>Step {step + 1}</Typography>
        <DialogActions
          onCancel={() => {
            setOpen(false);
            setStep(0);
          }}
          onSubmit={() => setStep((prev) => prev + 1)}
          SubmitButtonProps={{
            label: 'Next',
          }}
        />
      </Dialog>
    </div>
  );
};
StepDialogStory.storyName = 'Steps';

export const DialogHookStory = (): JSX.Element => {
  const showDialog = useDialog();

  /**
   * Wrap in <DialogProvider> in order to use tis hook
   */
  const handleShowSimpleDialog = () => {
    showDialog?.({
      action: 'Ok',
      callback: () => alert('Submit from useDialog'),
      hierarchy: 'primary',
      message: 'Lorem ipsum',
      title: 'Title',
    });
  };
  const handleShowDialog = () => {
    showDialog?.({
      action: 'Yes, totally',
      callback: () => alert('Submit from useDialog'),
      hierarchy: 'primary',
      message: 'Are you ok with this dialog?',
      title: 'Example title',
    });
  };
  const handleShowErrorDialog = () => {
    showDialog?.({
      action: 'Yep, do it',
      callback: () => alert('Submit from useDialog'),
      hierarchy: 'error',
      message:
        'Do you really know what you are doing here? This seems very radical',
      title: 'Much important',
    });
  };

  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Button
        hierarchy={'primary'}
        onClick={handleShowSimpleDialog}
        style={{ marginBottom: 8 }}
        label={'Open simple hook Dialog'}
      />
      <Button
        hierarchy={'primary'}
        onClick={handleShowDialog}
        style={{ marginBottom: 8 }}
        label={'Open filled hook Dialog'}
      />
      <Button
        hierarchy={'error'}
        onClick={handleShowErrorDialog}
        label={'Open error hook Dialog'}
      />
    </div>
  );
};

DialogHookStory.storyName = 'useDialog';
