import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button, ToastContainer, toast } from '../..';

export default {
  title: 'Components/Toast',
  component: ToastContainer,
  decorators: [withKnobs],
};

export const ToastStory = (): JSX.Element => {
  const margin = { marginBottom: 24 };
  return (
    <div>
      <ToastContainer />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          padding: 16,
        }}
      >
        <Button
          label={'Show neutral toast!'}
          onClick={() => toast.neutral('Neutral Notification !')}
          style={margin}
        />
        <Button
          label={'Show success toast with long text!'}
          onClick={() =>
            toast.success(
              'This is an example with a lot of text inside the toast. From 512px the text runs multiline. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            )
          }
          style={margin}
        />
        <Button
          label={'Show success toast with very long text!'}
          onClick={() =>
            toast.success(
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.!'
            )
          }
          style={margin}
        />
        <Button
          label={'Show success toast!'}
          onClick={() => toast.success('Successfully executed!')}
          style={margin}
        />
        <Button
          label={'Show success toast with link!'}
          onClick={() =>
            toast.success(
              <div>
                This is an embedded <a href={'https://scalara.de/'}> Link </a>{' '}
                that navigates to another page
              </div>
            )
          }
          style={margin}
        />
        <Button
          label={'Show warning toast!'}
          onClick={() => toast.warning('This might be undesirable!')}
          style={margin}
        />
        <Button
          label={'Show error toast!'}
          hierarchy={'destructive'}
          onClick={() => toast.error('Oh no, something bad happened!')}
          style={margin}
        />
      </div>
    </div>
  );
};
ToastStory.storyName = 'Overview';
