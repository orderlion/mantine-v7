import { StylesApiProps, Factory } from '../../core';
import { ModalBaseBodyProps } from '../ModalBase';
export type ModalBodyStylesNames = 'body';
export interface ModalBodyProps extends ModalBaseBodyProps, StylesApiProps<ModalBodyFactory> {
}
export type ModalBodyFactory = Factory<{
    props: ModalBodyProps;
    ref: HTMLDivElement;
    stylesNames: ModalBodyStylesNames;
    compound: true;
}>;
export declare const ModalBody: import("../../core").MantineComponent<{
    props: ModalBodyProps;
    ref: HTMLDivElement;
    stylesNames: ModalBodyStylesNames;
    compound: true;
}>;
