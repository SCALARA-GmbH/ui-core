import PopperJs from 'popper.js';
import * as React from 'react';

export const usePopoverPositionUpdate = ({ offset } = { offset: { x: 25, y: -75 } }) => {
  const popoverRef = React.useRef<PopperJs>(null);

  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const anchorElement = {
    clientWidth: 0,
    clientHeight: 0,
    getBoundingClientRect: () => ({
      top: positionRef.current.y,
      left: positionRef.current.x,
      right: positionRef.current.x,
      bottom: positionRef.current.y,
      width: 0,
      height: 0,
    }),
  };
  const update = ({ x, y }: { x: number; y: number }) => {
    positionRef.current = { x: x + offset.x, y: y + offset.y };

    if (popoverRef.current != null) {
      popoverRef.current.scheduleUpdate();
    }
  };

  return {
    update,
    anchorElement,
    popoverRef,
  };
};
