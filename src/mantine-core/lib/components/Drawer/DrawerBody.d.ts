import { StylesApiProps, Factory } from '../../core';
import { ModalBaseBodyProps } from '../ModalBase';
export type DrawerBodyStylesNames = 'body';
export interface DrawerBodyProps extends ModalBaseBodyProps, StylesApiProps<DrawerBodyFactory> {
}
export type DrawerBodyFactory = Factory<{
    props: DrawerBodyProps;
    ref: HTMLDivElement;
    stylesNames: DrawerBodyStylesNames;
    compound: true;
}>;
export declare const DrawerBody: import("../../core").MantineComponent<{
    props: DrawerBodyProps;
    ref: HTMLDivElement;
    stylesNames: DrawerBodyStylesNames;
    compound: true;
}>;
