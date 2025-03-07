import React from 'react';
import { MantineSize, Factory } from '../../../core';
import { InputWrapperStylesNames, InputWrapperProps } from '../../Input';
export type CheckboxGroupStylesNames = InputWrapperStylesNames;
export interface CheckboxGroupProps extends Omit<InputWrapperProps, 'onChange'> {
    /** `Checkbox` components */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string[];
    /** Default value for uncontrolled component */
    defaultValue?: string[];
    /** Called when value changes */
    onChange?(value: string[]): void;
    /** Props passed down to the `Input.Wrapper` */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Controls size of the `Input.Wrapper`, `'sm'` by default */
    size?: MantineSize | (string & {});
}
export type CheckboxGroupFactory = Factory<{
    props: CheckboxGroupProps;
    ref: HTMLDivElement;
    stylesNames: CheckboxGroupStylesNames;
}>;
export declare const CheckboxGroup: import("../../../core").MantineComponent<{
    props: CheckboxGroupProps;
    ref: HTMLDivElement;
    stylesNames: CheckboxGroupStylesNames;
}>;
