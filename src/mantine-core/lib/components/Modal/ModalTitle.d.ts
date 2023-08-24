import { StylesApiProps, Factory } from '../../core';
import { ModalBaseTitleProps } from '../ModalBase';
export type ModalTitleStylesNames = 'title';
export interface ModalTitleProps extends ModalBaseTitleProps, StylesApiProps<ModalTitleFactory> {
}
export type ModalTitleFactory = Factory<{
    props: ModalTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: ModalTitleStylesNames;
    compound: true;
}>;
export declare const ModalTitle: import("../../core").MantineComponent<{
    props: ModalTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: ModalTitleStylesNames;
    compound: true;
}>;
