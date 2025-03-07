import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, StyleProp, MantineSpacing } from '../../core';
import { GridCol } from './GridCol/GridCol';
export type GridStylesNames = 'root' | 'col' | 'inner';
export type GridCssVariables = {
    root: '--grid-justify' | '--grid-align';
};
export interface GridProps extends BoxProps, StylesApiProps<GridFactory>, ElementProps<'div'> {
    /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    gutter?: StyleProp<MantineSpacing | (string & {}) | number>;
    /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
    grow?: boolean;
    /** Sets `justify-content`, `flex-start` by default */
    justify?: React.CSSProperties['justifyContent'];
    /** Sets `align-items`, `stretch` by default */
    align?: React.CSSProperties['alignItems'];
    /** Number of columns in each row, `12` by default */
    columns?: number;
}
export type GridFactory = Factory<{
    props: GridProps;
    ref: HTMLDivElement;
    stylesNames: GridStylesNames;
    vars: GridCssVariables;
    staticComponents: {
        Col: typeof GridCol;
    };
}>;
export declare const Grid: import("../../core").MantineComponent<{
    props: GridProps;
    ref: HTMLDivElement;
    stylesNames: GridStylesNames;
    vars: GridCssVariables;
    staticComponents: {
        Col: typeof GridCol;
    };
}>;
