import React from 'react';
import { BoxProps, StylesApiProps, MantineGradient, BoxMod, PolymorphicFactory, MantineSize, MantineColor } from '../../core';
type TextTruncate = 'end' | 'start' | boolean;
export type TextStylesNames = 'root';
export type TextVariant = 'text' | 'gradient';
export type TextCssVariables = {
    root: '--text-gradient' | '--text-line-clamp' | '--text-fz' | '--text-lh';
};
export interface TextProps extends BoxProps, StylesApiProps<TextFactory> {
    __staticSelector?: string;
    mod?: BoxMod;
    /** Controls `font-size` and `line-height`, `'md'` by default */
    size?: MantineSize | (string & {});
    /** Number of lines after which Text will be truncated */
    lineClamp?: number;
    /** Side on which Text must be truncated, if `true`, text in truncated from the start */
    truncate?: TextTruncate;
    /** Sets `line-height` to 1 for centering, `false` by default */
    inline?: boolean;
    /** Determines whether font properties should be inherited from the parent, `false` by default */
    inherit?: boolean;
    /** Gradient configuration, ignored when `variant` is not `gradient`, `theme.defaultGradient` by default */
    gradient?: MantineGradient;
    /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
    span?: boolean;
    /** @deprecated Use `c` prop instead */
    color?: MantineColor;
}
export type TextFactory = PolymorphicFactory<{
    props: TextProps;
    defaultComponent: 'div';
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
}>;
export declare const Text: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, TextProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(TextProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof TextProps> & {
    ref?: any;
}) | (TextProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: TextProps;
    defaultComponent: 'div';
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: TextProps;
    defaultComponent: 'div';
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
}> & Record<string, never>;
export {};
