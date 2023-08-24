import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type MenuDropdownStylesNames = 'dropdown';
export interface MenuDropdownProps extends BoxProps, StylesApiProps<MenuDropdownFactory>, ElementProps<'div'> {
}
export type MenuDropdownFactory = Factory<{
    props: MenuDropdownProps;
    ref: HTMLDivElement;
    stylesNames: MenuDropdownStylesNames;
    compound: true;
}>;
export declare const MenuDropdown: import("../../../core").MantineComponent<{
    props: MenuDropdownProps;
    ref: HTMLDivElement;
    stylesNames: MenuDropdownStylesNames;
    compound: true;
}>;
