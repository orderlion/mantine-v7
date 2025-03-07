import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory } from '../../core';
export type CenterStylesNames = 'root';
export type CenterCssVariables = {
    root: '--center-display';
};
export interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
    /** Content that should be centered vertically and horizontally */
    children?: React.ReactNode;
    /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
    inline?: boolean;
}
export type CenterFactory = PolymorphicFactory<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
}>;
export declare const Center: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, CenterProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CenterProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CenterProps> & {
    ref?: any;
}) | (CenterProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
}> & Record<string, never>;
