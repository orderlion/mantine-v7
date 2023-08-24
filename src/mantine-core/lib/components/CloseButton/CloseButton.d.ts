import React from 'react';
import { PolymorphicFactory } from '../../core';
import { ActionIconProps, ActionIconVariant, ActionIconStylesNames } from '../ActionIcon';
export type CloseButtonVariant = ActionIconVariant;
export type CloseButtonStylesNames = ActionIconStylesNames;
export interface CloseButtonProps extends ActionIconProps {
    /** `X` icon `width` and `height`, `80%` by default */
    iconSize?: number | string;
}
export type CloseButtonFactory = PolymorphicFactory<{
    props: CloseButtonProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
}>;
export declare const CloseButton: (<C = "button">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, CloseButtonProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CloseButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CloseButtonProps> & {
    ref?: any;
}) | (CloseButtonProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: CloseButtonProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: CloseButtonProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
}> & Record<string, never>;
