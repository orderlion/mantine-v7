import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type MenuDividerStylesNames = 'divider';
export interface MenuDividerProps extends BoxProps, StylesApiProps<MenuDividerFactory>, ElementProps<'div'> {
}
export type MenuDividerFactory = Factory<{
    props: MenuDividerProps;
    ref: HTMLDivElement;
    stylesNames: MenuDividerStylesNames;
    compound: true;
}>;
export declare const MenuDivider: import("../../../core").MantineComponent<{
    props: MenuDividerProps;
    ref: HTMLDivElement;
    stylesNames: MenuDividerStylesNames;
    compound: true;
}>;
