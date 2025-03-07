import React from 'react';
import { BoxProps, StylesApiProps, MantineSize, MantineColor, MantineGradient, MantineRadius, PolymorphicFactory } from '../../core';
import { LoaderProps } from '../Loader';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
export type ActionIconVariant = 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'subtle' | 'default' | 'gradient';
export type ActionIconStylesNames = 'root' | 'loader';
export type ActionIconCssVariables = {
    root: '--ai-radius' | '--ai-size' | '--ai-bg' | '--ai-hover' | '--ai-color' | '--ai-bd';
};
export interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
    'data-disabled'?: boolean;
    __staticSelector?: string;
    /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: MantineRadius | (string & {}) | number;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** Icon displayed inside the button */
    children?: React.ReactNode;
}
export type ActionIconFactory = PolymorphicFactory<{
    props: ActionIconProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}>;
export declare const ActionIcon: (<C = "button">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, ActionIconProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ActionIconProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ActionIconProps> & {
    ref?: any;
}) | (ActionIconProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: ActionIconProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}> & import("../../core/factory/factory").ComponentClasses<{
    props: ActionIconProps;
    defaultComponent: 'button';
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}> & {
    Group: typeof ActionIconGroup;
};
