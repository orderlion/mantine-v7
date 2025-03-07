import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize, MantineRadius } from '../../../core';
export type ProgressRootStylesNames = 'root' | 'section' | 'label';
export type ProgressRootCssVariables = {
    root: '--progress-size' | '--progress-radius';
};
export interface __ProgressRootProps extends BoxProps, ElementProps<'div'> {
    /** Controls track height, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
}
export interface ProgressRootProps extends __ProgressRootProps, StylesApiProps<ProgressRootFactory> {
}
export type ProgressRootFactory = Factory<{
    props: ProgressRootProps;
    ref: HTMLDivElement;
    stylesNames: ProgressRootStylesNames;
    vars: ProgressRootCssVariables;
}>;
export declare const ProgressRoot: import("../../../core").MantineComponent<{
    props: ProgressRootProps;
    ref: HTMLDivElement;
    stylesNames: ProgressRootStylesNames;
    vars: ProgressRootCssVariables;
}>;
