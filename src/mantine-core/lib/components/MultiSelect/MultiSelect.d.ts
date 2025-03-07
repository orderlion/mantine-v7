import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../core';
import { ComboboxLikeProps, ComboboxLikeStylesNames } from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
export type MultiSelectStylesNames = __InputStylesNames | ComboboxLikeStylesNames | 'pill' | 'pillsList' | 'inputField';
export interface MultiSelectProps extends BoxProps, __BaseInputProps, ComboboxLikeProps, StylesApiProps<MultiSelectFactory>, ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
    /** Controlled component value */
    value?: string[];
    /** Default value for uncontrolled component */
    defaultValue?: string[];
    /** Called whe value changes */
    onChange?(value: string[]): void;
    /** Controlled search value */
    searchValue?: string;
    /** Default search value */
    defaultSearchValue?: string;
    /** Called when search changes */
    onSearchChange?(value: string): void;
    /** Maximum number of values, `Infinity` by default */
    maxValues?: number;
    /** Determines whether the select should be searchable, `false` by default */
    searchable?: boolean;
    /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
    nothingFoundMessage?: React.ReactNode;
    /** Determines whether check icon should be displayed near the selected option label, `true` by default */
    withCheckIcon?: boolean;
    /** Position of the check icon relative to the option label, `'left'` by default */
    checkIconPosition?: 'left' | 'right';
    /** Determines whether picked options should be removed from the options list, `false` by default */
    hidePickedOptions?: boolean;
}
export type MultiSelectFactory = Factory<{
    props: MultiSelectProps;
    ref: HTMLInputElement;
    stylesNames: MultiSelectStylesNames;
}>;
export declare const MultiSelect: import("../../core").MantineComponent<{
    props: MultiSelectProps;
    ref: HTMLInputElement;
    stylesNames: MultiSelectStylesNames;
}>;
