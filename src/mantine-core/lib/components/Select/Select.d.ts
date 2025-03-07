import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
import { __InputStylesNames, __BaseInputProps, InputVariant } from '../Input';
import { ComboboxLikeProps, ComboboxLikeStylesNames } from '../Combobox';
export type SelectStylesNames = __InputStylesNames | ComboboxLikeStylesNames;
export interface SelectProps extends BoxProps, __BaseInputProps, ComboboxLikeProps, StylesApiProps<SelectFactory>, ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
    /** Controlled component value */
    value?: string | null;
    /** Uncontrolled component default value */
    defaultValue?: string | null;
    /** Called when value changes */
    onChange?(value: string | null): void;
    /** Determines whether the select should be searchable, `false` by default */
    searchable?: boolean;
    /** Determines whether check icon should be displayed near the selected option label, `true` by default */
    withCheckIcon?: boolean;
    /** Position of the check icon relative to the option label, `'left'` by default */
    checkIconPosition?: 'left' | 'right';
    /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
    nothingFoundMessage?: React.ReactNode;
}
export type SelectFactory = Factory<{
    props: SelectProps;
    ref: HTMLInputElement;
    stylesNames: SelectStylesNames;
    variant: InputVariant;
}>;
export declare const Select: import("../../core").MantineComponent<{
    props: SelectProps;
    ref: HTMLInputElement;
    stylesNames: SelectStylesNames;
    variant: InputVariant;
}>;
