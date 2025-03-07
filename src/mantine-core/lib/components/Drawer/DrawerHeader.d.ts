import { StylesApiProps, Factory } from '../../core';
import { ModalBaseHeaderProps } from '../ModalBase';
export type DrawerHeaderStylesNames = 'header';
export interface DrawerHeaderProps extends ModalBaseHeaderProps, StylesApiProps<DrawerHeaderFactory> {
}
export type DrawerHeaderFactory = Factory<{
    props: DrawerHeaderProps;
    ref: HTMLDivElement;
    stylesNames: DrawerHeaderStylesNames;
    compound: true;
}>;
export declare const DrawerHeader: import("../../core").MantineComponent<{
    props: DrawerHeaderProps;
    ref: HTMLDivElement;
    stylesNames: DrawerHeaderStylesNames;
    compound: true;
}>;
