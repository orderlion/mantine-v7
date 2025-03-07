import React from 'react';
import { MantineShadow, MantineRadius, Factory, StylesApiProps } from '../../core';
import { TransitionOverride } from '../Transition';
import { FloatingAxesOffsets, FloatingPosition, ArrowPosition } from '../Floating';
import { PortalProps } from '../Portal';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';
export type PopoverStylesNames = 'dropdown' | 'arrow';
export type PopoverCssVariables = {
    dropdown: '--popover-radius' | '--popover-shadow';
};
export interface __PopoverProps {
    /** Dropdown position relative to the target element, `'bottom'` by default */
    position?: FloatingPosition;
    /** Offset of the dropdown element, `8` by default */
    offset?: number | FloatingAxesOffsets;
    /** Called when dropdown position changes */
    onPositionChange?(position: FloatingPosition): void;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?(): void;
    /** Called when dropdown opens */
    onOpen?(): void;
    /** If set dropdown will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
    transitionProps?: TransitionOverride;
    /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
    width?: PopoverWidth;
    /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `7` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position */
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within the `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` when `withinPortal` is true */
    portalProps?: Omit<PortalProps, 'children'>;
    /** Dropdown `z-index`, `300` by default */
    zIndex?: string | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: MantineShadow | (string & {});
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
}
export interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
    __staticSelector?: string;
    /** `Popover.Target` and `Popover.Dropdown` components */
    children?: React.ReactNode;
    /** Initial opened state for uncontrolled component */
    defaultOpened?: boolean;
    /** Controlled dropdown opened state */
    opened?: boolean;
    /** Called with current state when dropdown opens or closes */
    onChange?(opened: boolean): void;
    /** Determines whether dropdown should be closed on outside clicks, `true` by default */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, `false` by default */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
    closeOnEscape?: boolean;
    /** id base to create accessibility connections */
    id?: string;
    /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
    withRoles?: boolean;
}
export type PopoverFactory = Factory<{
    props: PopoverProps;
    stylesNames: PopoverStylesNames;
    vars: PopoverCssVariables;
}>;
export declare function Popover(_props: PopoverProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Popover {
    var Target: import("../../core").MantineComponent<{
        props: import("./PopoverTarget/PopoverTarget").PopoverTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Dropdown: import("../../core").MantineComponent<{
        props: import("./PopoverDropdown/PopoverDropdown").PopoverDropdownProps;
        ref: HTMLDivElement;
        stylesNames: PopoverStylesNames;
        compound: true;
    }>;
    var displayName: string;
    var extend: (input: import("../../core/factory/factory").ExtendsRootComponent<{
        props: PopoverProps;
        stylesNames: PopoverStylesNames;
        vars: PopoverCssVariables;
    }>) => import("../../core/factory/factory").ExtendsRootComponent<{
        props: PopoverProps;
        stylesNames: PopoverStylesNames;
        vars: PopoverCssVariables;
    }>;
}
