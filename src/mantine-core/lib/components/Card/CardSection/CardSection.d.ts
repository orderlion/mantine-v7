import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory } from '../../../core';
export type CardSectionStylesNames = 'section';
export interface CardSectionProps extends BoxProps, StylesApiProps<CardSectionFactory> {
    /** Determines whether the section should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
    inheritPadding?: boolean;
}
export type CardSectionFactory = PolymorphicFactory<{
    props: CardSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardSectionStylesNames;
    compound: true;
}>;
export declare const CardSection: (<C = "div">(props: import("../../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, CardSectionProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CardSectionProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CardSectionProps> & {
    ref?: any;
}) | (CardSectionProps & {
    component: React.ElementType<any>;
})>, never> & import("../../../core/factory/factory").ThemeExtend<{
    props: CardSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardSectionStylesNames;
    compound: true;
}> & import("../../../core/factory/factory").ComponentClasses<{
    props: CardSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardSectionStylesNames;
    compound: true;
}> & Record<string, never>;
