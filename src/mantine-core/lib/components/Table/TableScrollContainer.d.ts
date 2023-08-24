import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
export type TableScrollContainerStylesNames = 'scrollContainer' | 'scrollContainerInner';
export type TableScrollContainerCssVariables = {
    scrollContainer: '--table-min-width' | '--table-overflow';
};
export interface TableScrollContainerProps extends BoxProps, StylesApiProps<TableScrollContainerFactory>, ElementProps<'div'> {
    /** `min-width` of the `Table` at which it should become scrollable */
    minWidth: React.CSSProperties['minWidth'];
    /** Type of the scroll container, `native` to use native scrollbars, `scrollarea` to use `ScrollArea` component, `scrollarea` by default */
    type?: 'native' | 'scrollarea';
}
export type TableScrollContainerFactory = Factory<{
    props: TableScrollContainerProps;
    ref: HTMLDivElement;
    stylesNames: TableScrollContainerStylesNames;
    vars: TableScrollContainerCssVariables;
}>;
export declare const TableScrollContainer: import("../../core").MantineComponent<{
    props: TableScrollContainerProps;
    ref: HTMLDivElement;
    stylesNames: TableScrollContainerStylesNames;
    vars: TableScrollContainerCssVariables;
}>;
