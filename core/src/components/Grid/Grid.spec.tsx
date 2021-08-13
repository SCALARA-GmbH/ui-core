import * as React from 'react';

import { render } from '../../../test-utils/render';
import { GridItem } from '../../index';

import Grid from './Grid';

describe('<Grid />', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Grid>
        <GridItem>
          <div>test</div>
        </GridItem>
      </Grid>
    );
    expect(container).toBeInTheDocument();
  });
  it('renders without warning', () => {
    console.warn = jest.fn();
    render(
      <Grid>
        <GridItem>
          <div>test</div>
        </GridItem>
      </Grid>
    );
    expect(console.warn).not.toHaveBeenCalled();
  });
  it('renders without error', () => {
    console.error = jest.fn();
    render(
      <Grid>
        <GridItem>
          <div>test</div>
        </GridItem>
      </Grid>
    );
    expect(console.error).not.toHaveBeenCalled();
  });
});
