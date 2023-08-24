import { StylesApiProps, Factory } from '../../core';
import { ModalBaseCloseButtonProps } from '../ModalBase';
export type ModalCloseButtonStylesNames = 'close';
export interface ModalCloseButtonProps extends ModalBaseCloseButtonProps, StylesApiProps<ModalCloseButtonFactory> {
}
export type ModalCloseButtonFactory = Factory<{
    props: ModalCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: ModalCloseButtonStylesNames;
    compound: true;
}>;
export declare const ModalCloseButton: import("../../core").MantineComponent<{
    props: ModalCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: ModalCloseButtonStylesNames;
    compound: true;
}>;
