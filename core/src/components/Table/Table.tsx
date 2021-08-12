import * as React from 'react';

import Divider from '../Divider';

export interface TableProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
}

const Table: React.FunctionComponent<TableProps> = ({ children, className = '', style = {}, testId = '' }) => (
  <div className={className} data-testid={testId} style={style}>
    {React.Children.map(children, (child, index) => {
      if (index > 0) {
        return (
          <>
            <Divider disableGutters orientation={'horizontal'} testId={`${testId}-row-divider-${index}`} />
            {child}
          </>
        );
      }
      return child;
    })}
  </div>
);

export default Table;
