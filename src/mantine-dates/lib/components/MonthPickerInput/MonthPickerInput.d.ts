/// <reference types="react" />
import { BoxProps, StylesApiProps, Factory, InputVariant, __InputStylesNames, MantineComponentStaticProperties } from '@mantine/core';
import { MonthPickerBaseProps, MonthPickerStylesNames } from '../MonthPicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps } from '../PickerInputBase';
export type MonthPickerInputStylesNames = __InputStylesNames | MonthPickerStylesNames;
export interface MonthPickerInputProps<Type extends DatePickerType = 'default'> extends BoxProps, DateInputSharedProps, MonthPickerBaseProps<Type>, StylesApiProps<MonthPickerInputFactory> {
    /** Dayjs format to display input value, "MMMM YYYY" by default  */
    valueFormat?: string;
}
export type MonthPickerInputFactory = Factory<{
    props: MonthPickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: MonthPickerInputStylesNames;
    variant: InputVariant;
}>;
type MonthPickerInputComponent = (<Type extends DatePickerType = 'default'>(props: MonthPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<MonthPickerInputFactory>;
export declare const MonthPickerInput: MonthPickerInputComponent;
export {};
//# sourceMappingURL=MonthPickerInput.d.ts.map