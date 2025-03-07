import React from 'react';
import { StylesApiProps, Factory } from '../../core';
import { __PopoverProps, PopoverStylesNames } from '../Popover';
export type MenuStylesNames = 'item' | 'itemLabel' | 'itemSection' | 'label' | 'divider' | PopoverStylesNames;
export type MenuFactory = Factory<{
    props: MenuProps;
    ref: HTMLDivElement;
    stylesNames: MenuStylesNames;
}>;
export interface MenuProps extends __PopoverProps, StylesApiProps<MenuFactory> {
    variant?: string;
    /** Menu content */
    children?: React.ReactNode;
    /** Controlled menu opened state */
    opened?: boolean;
    /** Uncontrolled menu initial opened state */
    defaultOpened?: boolean;
    /** Called when menu opened state changes */
    onChange?(opened: boolean): void;
    /** Called when Menu is opened */
    onOpen?(): void;
    /** Called when Menu is closed */
    onClose?(): void;
    /** Determines whether Menu should be closed when item is clicked */
    closeOnItemClick?: boolean;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
    closeOnEscape?: boolean;
    /** Event which should open menu */
    trigger?: 'click' | 'hover';
    /** Open delay in ms, applicable only to trigger="hover" variant */
    openDelay?: number;
    /** Close delay in ms, applicable only to trigger="hover" variant */
    closeDelay?: number;
    /** Determines whether dropdown should be closed on outside clicks, default to true */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** id base to create accessibility connections */
    id?: string;
}
export declare function Menu(_props: MenuProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Menu {
    var extend: (input: import("../../core/factory/factory").ExtendsRootComponent<{
        props: MenuProps;
        ref: HTMLDivElement;
        stylesNames: MenuStylesNames;
    }>) => import("../../core/factory/factory").ExtendsRootComponent<{
        props: MenuProps;
        ref: HTMLDivElement;
        stylesNames: MenuStylesNames;
    }>;
    var classes: Record<string, string>;
    var displayName: string;
    var Item: (<C = "button">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, import("./MenuItem/MenuItem").MenuItemProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(import("./MenuItem/MenuItem").MenuItemProps & {
        component?: any;
    } & Omit<Omit<any, "ref">, "component" | keyof import("./MenuItem/MenuItem").MenuItemProps> & {
        ref?: any;
    }) | (import("./MenuItem/MenuItem").MenuItemProps & {
        component: React.ElementType<any>;
    })>, never> & import("../../core/factory/factory").ThemeExtend<{
        props: import("./MenuItem/MenuItem").MenuItemProps;
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: import("./MenuItem/MenuItem").MenuItemStylesNames;
        compound: true;
    }> & import("../../core/factory/factory").ComponentClasses<{
        props: import("./MenuItem/MenuItem").MenuItemProps;
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: import("./MenuItem/MenuItem").MenuItemStylesNames;
        compound: true;
    }> & Record<string, never>;
    var Label: import("../../core").MantineComponent<{
        props: import("./MenuLabel/MenuLabel").MenuLabelProps;
        ref: HTMLDivElement;
        stylesNames: "label";
        compound: true;
    }>;
    var Dropdown: import("../../core").MantineComponent<{
        props: import("./MenuDropdown/MenuDropdown").MenuDropdownProps;
        ref: HTMLDivElement;
        stylesNames: "dropdown";
        compound: true;
    }>;
    var Target: React.ForwardRefExoticComponent<import("./MenuTarget/MenuTarget").MenuTargetProps & React.RefAttributes<HTMLElement>>;
    var Divider: import("../../core").MantineComponent<{
        props: import("./MenuDivider/MenuDivider").MenuDividerProps;
        ref: HTMLDivElement;
        stylesNames: "divider";
        compound: true;
    }>;
}
