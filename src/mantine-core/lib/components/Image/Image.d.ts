import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineRadius } from '../../core';
export type ImageStylesNames = 'root';
export type ImageCssVariables = {
    root: '--image-radius' | '--image-object-fit';
};
export interface ImageProps extends BoxProps, StylesApiProps<ImageFactory> {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `0` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Controls `object-fit` style, `'cover'` by default */
    fit?: React.CSSProperties['objectFit'];
    /** Image url that will be used as a fallback in case `src` prop is not set or image cannot be loaded */
    fallbackSrc?: string;
    /** Image url */
    src?: any;
    /** Called when image fails to load */
    onError?(event: React.SyntheticEvent<HTMLImageElement, Event>): void;
}
export type ImageFactory = PolymorphicFactory<{
    props: ImageProps;
    defaultRef: HTMLImageElement;
    defaultComponent: 'img';
    stylesNames: ImageStylesNames;
    vars: ImageCssVariables;
}>;
export declare const Image: (<C = "img">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, ImageProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ImageProps> & {
    ref?: any;
}) | (ImageProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: ImageProps;
    defaultRef: HTMLImageElement;
    defaultComponent: 'img';
    stylesNames: ImageStylesNames;
    vars: ImageCssVariables;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: ImageProps;
    defaultRef: HTMLImageElement;
    defaultComponent: 'img';
    stylesNames: ImageStylesNames;
    vars: ImageCssVariables;
}> & Record<string, never>;
