import { StylesApiProps, Factory } from '../../core';
import { ModalBaseContentProps } from '../ModalBase';
export type ModalContentStylesNames = 'content' | 'inner';
export interface ModalContentProps extends ModalBaseContentProps, StylesApiProps<ModalContentFactory> {
}
export type ModalContentFactory = Factory<{
    props: ModalContentProps;
    ref: HTMLDivElement;
    stylesNames: ModalContentStylesNames;
    compound: true;
}>;
export declare const ModalContent: import("../../core").MantineComponent<{
    props: ModalContentProps;
    ref: HTMLDivElement;
    stylesNames: ModalContentStylesNames;
    compound: true;
}>;
