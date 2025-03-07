import React from 'react';
import { MantineSize, Factory } from '../../../core';
import { InputWrapperStylesNames, InputWrapperProps } from '../../Input';
export type RadioGroupStylesNames = InputWrapperStylesNames;
export interface RadioGroupProps extends Omit<InputWrapperProps, 'onChange'> {
    /** `Radio` components */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string;
    /** Default value for uncontrolled component */
    defaultValue?: string;
    /** Called when value changes */
    onChange?(value: string): void;
    /** Props passed down to the `Input.Wrapper` */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Controls size of the `Input.Wrapper`, `'sm'` by default */
    size?: MantineSize;
    /** Name attribute of child radio inputs */
    name?: string;
}
export type RadioGroupFactory = Factory<{
    props: RadioGroupProps;
    ref: HTMLDivElement;
    stylesNames: RadioGroupStylesNames;
}>;
export declare const RadioGroup: import("../../../core").MantineComponent<{
    props: RadioGroupProps;
    ref: HTMLDivElement;
    stylesNames: RadioGroupStylesNames;
}>;
