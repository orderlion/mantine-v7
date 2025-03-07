import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory } from '../../../core';
export type AppShellSectionStylesNames = 'section';
export interface AppShellSectionProps extends BoxProps, StylesApiProps<AppShellSectionFactory> {
    /** Determines whether the section should take all available space, `false` by default */
    grow?: boolean;
}
export type AppShellSectionFactory = PolymorphicFactory<{
    props: AppShellSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AppShellSectionStylesNames;
    compound: true;
}>;
export declare const AppShellSection: (<C = "div">(props: import("../../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, AppShellSectionProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AppShellSectionProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AppShellSectionProps> & {
    ref?: any;
}) | (AppShellSectionProps & {
    component: React.ElementType<any>;
})>, never> & import("../../../core/factory/factory").ThemeExtend<{
    props: AppShellSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AppShellSectionStylesNames;
    compound: true;
}> & import("../../../core/factory/factory").ComponentClasses<{
    props: AppShellSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AppShellSectionStylesNames;
    compound: true;
}> & Record<string, never>;
