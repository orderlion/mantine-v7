import React from 'react';
import { MantineColor, MantineTheme, PolymorphicFactory } from '../../core';
import { TextStylesNames, TextProps, TextVariant } from '../Text';
export interface HighlightProps extends Omit<TextProps, 'color'> {
    /** Substring or an array of substrings to highlight in `children` */
    highlight: string | string[];
    /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
    color?: MantineColor | string;
    /** Styles applied to `mark` elements */
    highlightStyles?: React.CSSProperties | ((theme: MantineTheme) => React.CSSProperties);
    /** String parts of which must be highlighted */
    children: string;
}
export type HighlightFactory = PolymorphicFactory<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: TextStylesNames;
    variant: TextVariant;
}>;
export declare const Highlight: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, HighlightProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(HighlightProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof HighlightProps> & {
    ref?: any;
}) | (HighlightProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: TextStylesNames;
    variant: TextVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: TextStylesNames;
    variant: TextVariant;
}> & Record<string, never>;
