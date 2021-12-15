import * as React from 'react';

import { DialogProvider, Frame, ThemeProvider } from '../src';

export const parameters = {
  layout: 'fullscreen',
};

/**
 * Global renderer for story
 * Use SBS in story name to enable light dark side by side view
 * @type {(function(*, {id: *}): *)[]}
 */
export const decorators = [
  (Story, { id }) => {
    if (id.includes('sbs')) {
      return (
        <ThemeProvider>
          <DialogProvider>
            <Frame orientation={'horizontal'} disableGutters>
              <Story />
              <ThemeProvider type={'dark'}>
                <Story />
              </ThemeProvider>
            </Frame>
          </DialogProvider>
        </ThemeProvider>
      );
    } else if (id.includes('vs')) {
      return (
        <ThemeProvider>
          <DialogProvider>
            <Frame orientation={'vertical'} disableGutters>
              <Story />
              <ThemeProvider type={'dark'}>
                <Story />
              </ThemeProvider>
            </Frame>
          </DialogProvider>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider>
        <DialogProvider>
          <Story />
        </DialogProvider>
      </ThemeProvider>
    );
  },
];
