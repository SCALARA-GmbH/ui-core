import MuiLabSkeleton from '@material-ui/lab/Skeleton';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
  height?: number | string;
  variant?: 'text' | 'rect' | 'circle';
  width?: number | string;
}

const Skeleton: React.FunctionComponent<Props> = ({ children, height, variant, width }) => {
  return (
    <MuiLabSkeleton height={height} variant={variant} width={width}>
      {children}
    </MuiLabSkeleton>
  );
};

export default Skeleton;
