import { StylesApiProps, Factory } from '../../core';
import { ModalBaseHeaderProps } from '../ModalBase';
export type ModalHeaderStylesNames = 'header';
export interface ModalHeaderProps extends ModalBaseHeaderProps, StylesApiProps<ModalHeaderFactory> {
}
export type ModalHeaderFactory = Factory<{
    props: ModalHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ModalHeaderStylesNames;
    compound: true;
}>;
export declare const ModalHeader: import("../../core").MantineComponent<{
    props: ModalHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ModalHeaderStylesNames;
    compound: true;
}>;
