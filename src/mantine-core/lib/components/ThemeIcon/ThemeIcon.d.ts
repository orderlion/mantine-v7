import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineGradient, MantineRadius, MantineColor, MantineSize } from '../../core';
export type ThemeIconStylesNames = 'root';
export type ThemeIconVariant = 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'default' | 'gradient';
export type ThemeIconCssVariables = {
    root: '--ti-radius' | '--ti-size' | '--ti-bg' | '--ti-color' | '--ti-bd';
};
export interface ThemeIconProps extends BoxProps, StylesApiProps<ThemeIconFactory>, ElementProps<'div'> {
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: MantineRadius | (string & {}) | number;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Icon displayed inside the component */
    children?: React.ReactNode;
}
export type ThemeIconFactory = Factory<{
    props: ThemeIconProps;
    ref: HTMLDivElement;
    stylesNames: ThemeIconStylesNames;
    vars: ThemeIconCssVariables;
    variant: ThemeIconVariant;
}>;
export declare const ThemeIcon: import("../../core").MantineComponent<{
    props: ThemeIconProps;
    ref: HTMLDivElement;
    stylesNames: ThemeIconStylesNames;
    vars: ThemeIconCssVariables;
    variant: ThemeIconVariant;
}>;
