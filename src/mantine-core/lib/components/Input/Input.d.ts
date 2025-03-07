import React from 'react';
import { BoxProps, StylesApiProps, MantineRadius, MantineSize, PolymorphicFactory } from '../../core';
import { InputLabel } from './InputLabel/InputLabel';
import { InputError } from './InputError/InputError';
import { InputDescription } from './InputDescription/InputDescription';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { InputWrapper, __InputWrapperProps, InputWrapperStylesNames } from './InputWrapper/InputWrapper';
export interface __BaseInputProps extends __InputWrapperProps, __InputProps {
}
export type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;
export type InputStylesNames = 'input' | 'wrapper' | 'section';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export type InputCssVariables = {
    wrapper: '--input-height' | '--input-fz' | '--input-radius' | '--input-left-section-width' | '--input-right-section-width' | '--input-left-section-pointer-events' | '--input-right-section-pointer-events' | '--input-padding-y' | '--input-margin-top' | '--input-margin-bottom';
};
export interface InputStylesCtx {
    offsetTop: boolean | undefined;
    offsetBottom: boolean | undefined;
}
export interface __InputProps {
    /** Content section rendered on the left side of the input */
    leftSection?: React.ReactNode;
    /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
    leftSectionWidth?: React.CSSProperties['width'];
    /** Props added to the `leftSection` element */
    leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
    leftSectionPointerEvents?: React.CSSProperties['pointerEvents'];
    /** Content section rendered on the right side of the input */
    rightSection?: React.ReactNode;
    /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
    rightSectionWidth?: React.CSSProperties['width'];
    /** Props added to the `rightSection` element */
    rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
    rightSectionPointerEvents?: React.CSSProperties['pointerEvents'];
    /** Props added to the root element of the `Input` component */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Sets `required` attribute on the `input` element */
    required?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Sets `disabled` attribute on the `input` element */
    disabled?: boolean;
    /** Controls input `height` and horizontal `padding`, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Determines whether the input should have `cursor: pointer` style, `false` by default */
    pointer?: boolean;
    /** Determines whether the input should have red border and text color when `error` prop is set, `true` by default */
    withErrorStyles?: boolean;
}
export interface InputProps extends BoxProps, __InputProps, StylesApiProps<InputFactory> {
    __staticSelector?: string;
    /** Props passed to Styles API context, replaces `Input.Wrapper` props */
    __stylesApiProps?: Record<string, any>;
    /** Determines whether the input should have error styles and `aria-invalid` attribute */
    error?: React.ReactNode;
    /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
    multiline?: boolean;
    /** Input element id */
    id?: string;
    /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
    withAria?: boolean;
}
export type InputFactory = PolymorphicFactory<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: 'input';
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
        Label: typeof InputLabel;
        Error: typeof InputError;
        Description: typeof InputDescription;
        Placeholder: typeof InputPlaceholder;
        Wrapper: typeof InputWrapper;
    };
}>;
export declare const Input: (<C = "input">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, InputProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(InputProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof InputProps> & {
    ref?: any;
}) | (InputProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: 'input';
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
        Label: typeof InputLabel;
        Error: typeof InputError;
        Description: typeof InputDescription;
        Placeholder: typeof InputPlaceholder;
        Wrapper: typeof InputWrapper;
    };
}> & import("../../core/factory/factory").ComponentClasses<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: 'input';
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
        Label: typeof InputLabel;
        Error: typeof InputError;
        Description: typeof InputDescription;
        Placeholder: typeof InputPlaceholder;
        Wrapper: typeof InputWrapper;
    };
}> & {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
};
