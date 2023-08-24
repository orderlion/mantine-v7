import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type ListItemStylesNames = 'item' | 'itemWrapper' | 'itemIcon' | 'itemLabel';
export interface ListItemProps extends BoxProps, StylesApiProps<ListItemFactory>, ElementProps<'li'> {
    /** Icon to replace item bullet */
    icon?: React.ReactNode;
    /** Item content */
    children?: React.ReactNode;
}
export type ListItemFactory = Factory<{
    props: ListItemProps;
    ref: HTMLLIElement;
    stylesNames: ListItemStylesNames;
    compound: true;
}>;
export declare const ListItem: import("../../../core").MantineComponent<{
    props: ListItemProps;
    ref: HTMLLIElement;
    stylesNames: ListItemStylesNames;
    compound: true;
}>;
