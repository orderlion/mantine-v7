import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineRadius, MantineColor } from '../../core';
export type AlertStylesNames = 'root' | 'body' | 'label' | 'title' | 'icon' | 'wrapper' | 'message' | 'closeButton';
export type AlertVariant = 'filled' | 'light' | 'outline' | 'default' | 'transparent' | 'white';
export type AlertCssVariables = {
    root: '--alert-radius' | '--alert-bg' | '--alert-color' | '--alert-bd';
};
export interface AlertProps extends BoxProps, StylesApiProps<AlertFactory>, ElementProps<'div', 'title'> {
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: MantineColor;
    /** Alert title */
    title?: React.ReactNode;
    /** Icon displayed next to the title */
    icon?: React.ReactNode;
    /** Determines whether close button should be displayed, `false` by default */
    withCloseButton?: boolean;
    /** Called when the close button is clicked */
    onClose?(): void;
    /** Close button `aria-label` */
    closeButtonLabel?: string;
}
export type AlertFactory = Factory<{
    props: AlertProps;
    ref: HTMLDivElement;
    stylesNames: AlertStylesNames;
    vars: AlertCssVariables;
    variant: AlertVariant;
}>;
export declare const Alert: import("../../core").MantineComponent<{
    props: AlertProps;
    ref: HTMLDivElement;
    stylesNames: AlertStylesNames;
    vars: AlertCssVariables;
    variant: AlertVariant;
}>;
