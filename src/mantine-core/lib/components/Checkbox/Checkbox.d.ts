import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, MantineColor, MantineSize, MantineRadius, Factory } from '../../core';
import { InlineInputStylesNames } from '../InlineInput';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
export type CheckboxStylesNames = 'icon' | 'inner' | 'input' | InlineInputStylesNames;
export type CheckboxCssVariables = {
    root: '--checkbox-size' | '--checkbox-radius' | '--checkbox-color';
};
export interface CheckboxProps extends BoxProps, StylesApiProps<CheckboxFactory>, ElementProps<'input', 'size'> {
    /** Id used to bind input and label, if not passed, unique id will be generated instead */
    id?: string;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of all elements */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Props passed down to wrapper element */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: 'left' | 'right';
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error displayed below the label */
    error?: React.ReactNode;
    /** Indeterminate state of checkbox, if set, `checked` prop is ignored */
    indeterminate?: boolean;
    /** Icon rendered when checkbox has checked or indeterminate state */
    icon?: React.FC<{
        indeterminate: boolean | undefined;
        className: string;
    }>;
}
export type CheckboxFactory = Factory<{
    props: CheckboxProps;
    ref: HTMLInputElement;
    stylesNames: CheckboxStylesNames;
    vars: CheckboxCssVariables;
    staticComponents: {
        Group: typeof CheckboxGroup;
    };
}>;
export declare const Checkbox: import("../../core").MantineComponent<{
    props: CheckboxProps;
    ref: HTMLInputElement;
    stylesNames: CheckboxStylesNames;
    vars: CheckboxCssVariables;
    staticComponents: {
        Group: typeof CheckboxGroup;
    };
}>;
