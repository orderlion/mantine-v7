import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, MantineSpacing, Factory } from '../../core';
export type StackStylesNames = 'root';
export type StackCssVariables = {
    root: '--stack-gap' | '--stack-align' | '--stack-justify';
};
export interface StackProps extends BoxProps, StylesApiProps<StackFactory>, ElementProps<'div'> {
    /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
    gap?: MantineSpacing | (string & {}) | number;
    /** Controls `align-items` CSS property, `'stretch'` by default */
    align?: React.CSSProperties['alignItems'];
    /** Controls `justify-content` CSS property, `'flex-start'` by default */
    justify?: React.CSSProperties['justifyContent'];
}
export type StackFactory = Factory<{
    props: StackProps;
    ref: HTMLDivElement;
    stylesNames: StackStylesNames;
    vars: StackCssVariables;
}>;
export declare const Stack: import("../../core").MantineComponent<{
    props: StackProps;
    ref: HTMLDivElement;
    stylesNames: StackStylesNames;
    vars: StackCssVariables;
}>;
