import * as React from 'react';

export const OuterElementContext = React.createContext({});

export const OuterElementType = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  }
);
