import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineShadow, MantineRadius, MantineSpacing } from '../../core';
import { CardSection } from './CardSection/CardSection';
export type CardStylesNames = 'root' | 'section';
export type CardCssVariables = {
    root: '--card-padding';
};
export interface CardProps extends BoxProps, StylesApiProps<CardFactory> {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: MantineShadow | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius | number | (string & {});
    /** Determines whether the card should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
    /** Controls `padding`, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    padding?: MantineSpacing | (string & {}) | number;
    /** Card content */
    children?: React.ReactNode;
}
export type CardFactory = PolymorphicFactory<{
    props: CardProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardStylesNames;
    vars: CardCssVariables;
    staticComponents: {
        Section: typeof CardSection;
    };
}>;
export declare const Card: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, CardProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CardProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CardProps> & {
    ref?: any;
}) | (CardProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: CardProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardStylesNames;
    vars: CardCssVariables;
    staticComponents: {
        Section: typeof CardSection;
    };
}> & import("../../core/factory/factory").ComponentClasses<{
    props: CardProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: CardStylesNames;
    vars: CardCssVariables;
    staticComponents: {
        Section: typeof CardSection;
    };
}> & {
    Section: typeof CardSection;
};
