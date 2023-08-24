import { StylesApiProps, Factory } from '../../core';
import { ModalBaseOverlayProps } from '../ModalBase';
export type DrawerOverlayStylesNames = 'overlay';
export interface DrawerOverlayProps extends ModalBaseOverlayProps, StylesApiProps<DrawerOverlayFactory> {
}
export type DrawerOverlayFactory = Factory<{
    props: DrawerOverlayProps;
    ref: HTMLDivElement;
    stylesNames: DrawerOverlayStylesNames;
    compound: true;
}>;
export declare const DrawerOverlay: import("../../core").MantineComponent<{
    props: DrawerOverlayProps;
    ref: HTMLDivElement;
    stylesNames: DrawerOverlayStylesNames;
    compound: true;
}>;
