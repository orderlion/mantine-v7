import React from 'react';
import { BoxProps, StylesApiProps, MantineRadius, PolymorphicFactory } from '../../core';
export type BackgroundImageStylesNames = 'root';
export type BackgroundImageCssVariables = {
    root: '--bi-radius';
};
export interface BackgroundImageProps extends BoxProps, StylesApiProps<BackgroundImageFactory> {
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Image url */
    src: string;
}
export type BackgroundImageFactory = PolymorphicFactory<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
}>;
export declare const BackgroundImage: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, BackgroundImageProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BackgroundImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BackgroundImageProps> & {
    ref?: any;
}) | (BackgroundImageProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
}> & Record<string, never>;
