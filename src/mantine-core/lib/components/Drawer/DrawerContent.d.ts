import { StylesApiProps, Factory } from '../../core';
import { ModalBaseContentProps } from '../ModalBase';
export type DrawerContentStylesNames = 'content' | 'inner';
export interface DrawerContentProps extends ModalBaseContentProps, StylesApiProps<DrawerContentFactory> {
}
export type DrawerContentFactory = Factory<{
    props: DrawerContentProps;
    ref: HTMLDivElement;
    stylesNames: DrawerContentStylesNames;
    compound: true;
}>;
export declare const DrawerContent: import("../../core").MantineComponent<{
    props: DrawerContentProps;
    ref: HTMLDivElement;
    stylesNames: DrawerContentStylesNames;
    compound: true;
}>;
