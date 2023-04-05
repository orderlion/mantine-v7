import React, { forwardRef } from 'react';
import { useDirection } from '../../../core';
import { getArrowPositionStyles } from './get-arrow-position-styles';
import { ArrowPosition, FloatingPosition } from '../types';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number;
  arrowY: number;
  visible: boolean | undefined;
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  (
    {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      ...others
    },
    ref
  ) => {
    const { dir } = useDirection();
    if (!visible) {
      return null;
    }

    return (
      <div
        {...others}
        ref={ref}
        style={getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir,
          arrowX,
          arrowY,
        })}
      />
    );
  }
);

FloatingArrow.displayName = '@mantine/core/FloatingArrow';
