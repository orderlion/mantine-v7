import React from 'react';
import { useFocusReturn, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineRadius,
  MantineShadow,
  rem,
  closeOnEscape,
  getRadius,
  getShadow,
} from '../../../core';
import { OptionalPortal } from '../../Portal';
import { Transition } from '../../Transition';
import { FocusTrap } from '../../FocusTrap';
import { FloatingArrow } from '../../Floating';
import { usePopoverContext } from '../Popover.context';
import classes from './PopoverDropdown.module.css';

export type PopoverDropdownStylesNames = 'dropdown' | 'arrow';
export type PopoverDropdownVariant = string;
export type PopoverDropdownCssVariables = '--popover-radius' | '--popover-shadow';

export interface PopoverDropdownStylesParams {
  radius: MantineRadius | (string & {}) | number | undefined;
  shadow: MantineShadow | (string & {}) | number | undefined;
}

export interface PopoverDropdownProps
  extends BoxProps,
    StylesApiProps<PopoverDropdownStylesNames, PopoverDropdownVariant, PopoverDropdownCssVariables>,
    ElementProps<'div'> {}

export interface PopoverDropdownFactory {
  props: PopoverDropdownProps;
  ref: HTMLDivElement;
  stylesNames: PopoverDropdownStylesNames;
  vars: PopoverDropdownCssVariables;
  stylesParams: PopoverDropdownStylesParams;
}

const defaultProps: Partial<PopoverDropdownProps> = {};

export const PopoverDropdown = factory<PopoverDropdownFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onKeyDownCapture,
    ...others
  } = useProps('PopoverDropdown', defaultProps, props);

  const ctx = usePopoverContext();

  const getStyles = useStyles({
    name: ctx.__staticSelector,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<PopoverDropdownStylesParams>('PopoverDropdown', vars, {
    shadow: ctx.shadow,
    radius: ctx.radius,
  });

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus,
  });

  const accessibleProps = ctx.withRoles
    ? {
        'aria-labelledby': ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: 'dialog',
      }
    : {};

  const mergedRef = useMergedRef<any>(ref, ctx.floating);

  if (ctx.disabled) {
    return null;
  }

  return (
    <OptionalPortal withinPortal={ctx.withinPortal} {...ctx.portalProps}>
      <Transition
        mounted={ctx.opened}
        {...ctx.transitionProps}
        transition={ctx.transitionProps?.transition || 'fade'}
        duration={ctx.transitionProps?.duration ?? 150}
        keepMounted={ctx.keepMounted}
        exitDuration={
          typeof ctx.transitionProps?.exitDuration === 'number'
            ? ctx.transitionProps.exitDuration
            : ctx.transitionProps?.duration
        }
      >
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus}>
            <Box
              {...accessibleProps}
              {...others}
              tabIndex={-1}
              ref={mergedRef}
              onKeyDownCapture={closeOnEscape(ctx.onClose, {
                active: ctx.closeOnEscape,
                onTrigger: returnFocus,
                onKeyDown: onKeyDownCapture,
              })}
              data-position={ctx.placement}
              {...getStyles('dropdown', {
                style: {
                  ...transitionStyles,
                  zIndex: ctx.zIndex,
                  top: ctx.y ?? 0,
                  left: ctx.x ?? 0,
                  width: ctx.width === 'target' ? undefined : rem(ctx.width),
                },
              })}
              vars={{
                '--popover-radius': getRadius(ctx.radius),
                '--popover-shadow': getShadow(ctx.shadow),
                ..._vars,
              }}
            >
              {children}

              <FloatingArrow
                ref={ctx.arrowRef}
                arrowX={ctx.arrowX}
                arrowY={ctx.arrowY}
                visible={ctx.withArrow}
                position={ctx.placement}
                arrowSize={ctx.arrowSize}
                arrowRadius={ctx.arrowRadius}
                arrowOffset={ctx.arrowOffset}
                arrowPosition={ctx.arrowPosition}
                {...getStyles('arrow')}
              />
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  );
});

PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
