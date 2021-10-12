import * as React from 'react';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { useResetCache } from '../../hooks';

import { OuterElementContext, OuterElementType } from './OuterElement';

const LISTBOX_PADDING = 8; // px

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
};

const ListboxComponentVirtualized = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
    const itemSize = 56;

    const getChildSize = () => {
      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={() => getChildSize()}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

export default ListboxComponentVirtualized;
