import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type MenuLabelStylesNames = 'label';
export interface MenuLabelProps extends BoxProps, StylesApiProps<MenuLabelFactory>, ElementProps<'div'> {
}
export type MenuLabelFactory = Factory<{
    props: MenuLabelProps;
    ref: HTMLDivElement;
    stylesNames: MenuLabelStylesNames;
    compound: true;
}>;
export declare const MenuLabel: import("../../../core").MantineComponent<{
    props: MenuLabelProps;
    ref: HTMLDivElement;
    stylesNames: MenuLabelStylesNames;
    compound: true;
}>;
