import { StylesApiProps, Factory } from '../../core';
import { ModalBaseOverlayProps } from '../ModalBase';
export type ModalOverlayStylesNames = 'overlay';
export interface ModalOverlayProps extends ModalBaseOverlayProps, StylesApiProps<ModalOverlayFactory> {
}
export type ModalOverlayFactory = Factory<{
    props: ModalOverlayProps;
    ref: HTMLDivElement;
    stylesNames: ModalOverlayStylesNames;
    compound: true;
}>;
export declare const ModalOverlay: import("../../core").MantineComponent<{
    props: ModalOverlayProps;
    ref: HTMLDivElement;
    stylesNames: ModalOverlayStylesNames;
    compound: true;
}>;
