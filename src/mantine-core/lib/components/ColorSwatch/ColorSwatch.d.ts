import React from 'react';
import { BoxProps, MantineRadius, StylesApiProps, PolymorphicFactory } from '../../core';
export type ColorSwatchStylesNames = 'root' | 'alphaOverlay' | 'shadowOverlay' | 'colorOverlay' | 'childrenOverlay';
export type ColorSwatchCssVariables = {
    root: '--cs-radius' | '--cs-size';
};
export interface ColorSwatchProps extends BoxProps, StylesApiProps<ColorSwatchFactory> {
    /** Color to display, not related to `theme.colors` – supports only CSS color values */
    color: string;
    /** Controls `width` and `height` of the swatch, any valid CSS value, numbers are converted to rem */
    size?: React.CSSProperties['width'];
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem */
    radius?: MantineRadius | (string & {}) | number;
    /** Determines whether the swatch should have inner `box-shadow`, `true` by default */
    withShadow?: boolean;
    /** Content rendered inside the swatch */
    children?: React.ReactNode;
}
export type ColorSwatchFactory = PolymorphicFactory<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
}>;
export declare const ColorSwatch: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, ColorSwatchProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ColorSwatchProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ColorSwatchProps> & {
    ref?: any;
}) | (ColorSwatchProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
}> & Record<string, never>;
