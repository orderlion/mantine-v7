import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, MantineColor, MantineSpacing, Factory } from '../../core';
import { TableCaption, TableTbody, TableTd, TableTfoot, TableTh, TableTr, TableThead } from './Table.components';
import { TableScrollContainer } from './TableScrollContainer';
export type TableStylesNames = 'table' | 'thead' | 'tbody' | 'tfoot' | 'tr' | 'th' | 'td' | 'caption';
export type TableCssVariables = {
    table: '--table-layout' | '--table-border-color' | '--table-caption-side' | '--table-horizontal-spacing' | '--table-vertical-spacing' | '--table-striped-color' | '--table-highlight-on-hover-color';
};
export interface TableProps extends BoxProps, StylesApiProps<TableFactory>, ElementProps<'table'> {
    /** Value of `table-layout` style, `auto` by default */
    layout?: React.CSSProperties['tableLayout'];
    /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
    captionSide?: 'top' | 'bottom';
    /** Color of table borders, key of `theme.colors` or any valid CSS color */
    borderColor?: MantineColor;
    /** Determines whether the table should have outer border, `false` by default */
    withTableBorder?: boolean;
    /** Determines whether the table should have borders between columns, `false` by default */
    withColumnBorders?: boolean;
    /** Determines whether the table should have borders between rows, `true` by default */
    withRowBorders?: boolean;
    /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    horizontalSpacing?: MantineSpacing | number | (string & {});
    /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    verticalSpacing?: MantineSpacing | number | (string & {});
    /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
    striped?: boolean | 'odd' | 'even';
    /** Background color of striped rows, key of `theme.colors` or any valid CSS color */
    stripedColor?: MantineColor;
    /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
    highlightOnHover?: boolean;
    /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color */
    highlightOnHoverColor?: MantineColor;
}
export type TableFactory = Factory<{
    props: TableProps;
    ref: HTMLTableElement;
    stylesNames: TableStylesNames;
    vars: TableCssVariables;
    staticComponents: {
        Thead: typeof TableThead;
        Tbody: typeof TableTbody;
        Tfoot: typeof TableTfoot;
        Td: typeof TableTd;
        Th: typeof TableTh;
        Tr: typeof TableTr;
        Caption: typeof TableCaption;
        ScrollContainer: typeof TableScrollContainer;
    };
}>;
export declare const Table: import("../../core").MantineComponent<{
    props: TableProps;
    ref: HTMLTableElement;
    stylesNames: TableStylesNames;
    vars: TableCssVariables;
    staticComponents: {
        Thead: typeof TableThead;
        Tbody: typeof TableTbody;
        Tfoot: typeof TableTfoot;
        Td: typeof TableTd;
        Th: typeof TableTh;
        Tr: typeof TableTr;
        Caption: typeof TableCaption;
        ScrollContainer: typeof TableScrollContainer;
    };
}>;
