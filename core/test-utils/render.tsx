import {
  render as testingLibraryRender,
  fireEvent,
  act,
  RenderResult,
  waitFor,
  screen,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import InternalThemeProvider from '../src/components/ThemeProvider';
import { ThemeProps } from '../src/components/ThemeProvider/ThemeProvider';
import '@testing-library/jest-dom';

export const render = (
  element: React.ReactElement,
  container?: HTMLElement,
  ThemeProvider: React.ComponentType<ThemeProps> = InternalThemeProvider
): RenderResult => {
  return testingLibraryRender(<ThemeProvider>{element}</ThemeProvider>, {
    container,
  });
};

export { fireEvent, act, waitFor, renderHook, screen };
