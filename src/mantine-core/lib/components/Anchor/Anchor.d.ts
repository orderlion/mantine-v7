import React from 'react';
import { PolymorphicFactory } from '../../core';
import { TextProps, TextCssVariables, TextStylesNames, TextVariant } from '../Text';
export type AnchorStylesNames = TextStylesNames;
export type AnchorVariant = TextVariant;
export type AnchorCssVariables = TextCssVariables;
export interface AnchorProps extends Omit<TextProps, 'span'> {
    /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
    underline?: 'always' | 'hover' | 'never';
}
export type AnchorFactory = PolymorphicFactory<{
    props: AnchorProps;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
}>;
export declare const Anchor: (<C = "a">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, AnchorProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AnchorProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AnchorProps> & {
    ref?: any;
}) | (AnchorProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: AnchorProps;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: AnchorProps;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
}> & Record<string, never>;
