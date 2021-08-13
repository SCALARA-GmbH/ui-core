import * as React from 'react';
import { VariableSizeList } from 'react-window';

const useResetCache = (data: unknown): React.RefObject<VariableSizeList> => {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
};

export default useResetCache;
