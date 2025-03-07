import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineColor, MantineSize } from '../../core';
export type NavLinkStylesNames = 'root' | 'section' | 'body' | 'label' | 'description' | 'chevron' | 'children';
export type NavLinkVariant = 'filled' | 'light' | 'subtle';
export type NavLinkCssVariables = {
    root: '--nl-color' | '--nl-bg' | '--nl-hover';
    children: '--nl-offset';
};
export interface NavLinkProps extends BoxProps, StylesApiProps<NavLinkFactory> {
    /** Link content */
    label?: React.ReactNode;
    /** Link description */
    description?: React.ReactNode;
    /** Section displayed on the left side of the label */
    leftSection?: React.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React.ReactNode;
    /** Determines whether the link should have active styles, `false` by default */
    active?: boolean;
    /** Key of `theme.colors` of any valid CSS color to control active styles, `theme.primaryColor` by default */
    color?: MantineColor;
    /** If set, label and description will not wrap to the next line, `false` by default */
    noWrap?: boolean;
    /** Child `NavLink` components */
    children?: React.ReactNode;
    /** Controlled nested items collapse state */
    opened?: boolean;
    /** Uncontrolled nested items collapse initial state */
    defaultOpened?: boolean;
    /** Called when open state changes */
    onChange?(opened: boolean): void;
    /** If set, right section will not be rotated when collapse is opened, `false` by default */
    disableRightSectionRotation?: boolean;
    /** Key of `theme.spacing` or any valid CSS value to set collapsed links padding-left, `'lg'` by default */
    childrenOffset?: MantineSize | (string & {}) | number;
    /** If set, disabled styles will be added to the root element, `false` by default */
    disabled?: boolean;
    /** Called when the link is clicked */
    onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
}
export type NavLinkFactory = PolymorphicFactory<{
    props: NavLinkProps;
    defaultRef: HTMLAnchorElement;
    defaultComponent: 'a';
    stylesNames: NavLinkStylesNames;
    vars: NavLinkCssVariables;
    variant: NavLinkVariant;
}>;
export declare const NavLink: (<C = "a">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, NavLinkProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(NavLinkProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof NavLinkProps> & {
    ref?: any;
}) | (NavLinkProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: NavLinkProps;
    defaultRef: HTMLAnchorElement;
    defaultComponent: 'a';
    stylesNames: NavLinkStylesNames;
    vars: NavLinkCssVariables;
    variant: NavLinkVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: NavLinkProps;
    defaultRef: HTMLAnchorElement;
    defaultComponent: 'a';
    stylesNames: NavLinkStylesNames;
    vars: NavLinkCssVariables;
    variant: NavLinkVariant;
}> & Record<string, never>;
