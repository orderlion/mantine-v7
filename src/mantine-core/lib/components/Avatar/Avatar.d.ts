import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineSize, MantineRadius, MantineColor, MantineGradient } from '../../core';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
export type AvatarStylesNames = 'root' | 'placeholder' | 'image';
export type AvatarVariant = 'filled' | 'light' | 'gradient' | 'outline' | 'transparent' | 'default' | 'white';
export type AvatarCssVariables = {
    root: '--avatar-size' | '--avatar-radius' | '--avatar-bg' | '--avatar-color' | '--avatar-bd';
};
export interface AvatarProps extends BoxProps, StylesApiProps<AvatarFactory> {
    /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: MantineColor;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
    src?: string | null;
    /** Image `alt` attribute, also used as `title` attribute for placeholder */
    alt?: string;
    /** `img` tag attributes */
    imageProps?: React.ComponentPropsWithoutRef<'img'>;
    /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
    children?: React.ReactNode;
}
export type AvatarFactory = PolymorphicFactory<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
        Group: typeof AvatarGroup;
    };
}>;
export declare const Avatar: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, AvatarProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AvatarProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AvatarProps> & {
    ref?: any;
}) | (AvatarProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
        Group: typeof AvatarGroup;
    };
}> & import("../../core/factory/factory").ComponentClasses<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
        Group: typeof AvatarGroup;
    };
}> & {
    Group: typeof AvatarGroup;
};
