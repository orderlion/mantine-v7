import React from 'react';
import { StylesApiProps, BoxComponentProps, PolymorphicFactory } from '../../core';
export type UnstyledButtonStylesNames = 'root';
export interface UnstyledButtonProps extends Omit<BoxComponentProps, 'vars' | 'variant'>, StylesApiProps<UnstyledButtonFactory> {
    __staticSelector?: string;
}
export type UnstyledButtonFactory = PolymorphicFactory<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
}>;
export declare const UnstyledButton: (<C = "button">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, UnstyledButtonProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(UnstyledButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof UnstyledButtonProps> & {
    ref?: any;
}) | (UnstyledButtonProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
}> & Record<string, never>;
