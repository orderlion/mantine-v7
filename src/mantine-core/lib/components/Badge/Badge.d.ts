import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineSize, MantineRadius, MantineColor, MantineGradient } from '../../core';
export type BadgeStylesNames = 'root' | 'section' | 'label';
export type BadgeVariant = 'filled' | 'light' | 'outline' | 'dot' | 'transparent' | 'white' | 'default' | 'gradient';
export type BadgeCssVariables = {
    root: '--badge-height' | '--badge-padding-x' | '--badge-fz' | '--badge-radius' | '--badge-bg' | '--badge-color' | '--badge-bd' | '--badge-dot-color';
};
export interface BadgeProps extends BoxProps, StylesApiProps<BadgeFactory> {
    /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Content displayed on the left side of the badge label */
    leftSection?: React.ReactNode;
    /** Content displayed on the right side of the badge label */
    rightSection?: React.ReactNode;
    /** Determines whether Badge should take 100% of its parent width, `false` by default */
    fullWidth?: boolean;
    /** Main badge content */
    children?: React.ReactNode;
}
export type BadgeFactory = PolymorphicFactory<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
}>;
export declare const Badge: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, BadgeProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BadgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BadgeProps> & {
    ref?: any;
}) | (BadgeProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
}> & Record<string, never>;
