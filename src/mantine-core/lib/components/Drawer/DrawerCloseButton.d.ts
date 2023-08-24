import { StylesApiProps, Factory } from '../../core';
import { ModalBaseCloseButtonProps } from '../ModalBase';
export type DrawerCloseButtonStylesNames = 'close';
export interface DrawerCloseButtonProps extends ModalBaseCloseButtonProps, StylesApiProps<DrawerCloseButtonFactory> {
}
export type DrawerCloseButtonFactory = Factory<{
    props: DrawerCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: DrawerCloseButtonStylesNames;
    compound: true;
}>;
export declare const DrawerCloseButton: import("../../core").MantineComponent<{
    props: DrawerCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: DrawerCloseButtonStylesNames;
    compound: true;
}>;
