/// <reference types="react" />
import { BoxProps, StylesApiProps, Factory, InputVariant, __InputStylesNames, MantineComponentStaticProperties } from '@mantine/core';
import { YearPickerBaseProps, YearPickerStylesNames } from '../YearPicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps } from '../PickerInputBase';
export type YearPickerInputStylesNames = __InputStylesNames | YearPickerStylesNames;
export interface YearPickerInputProps<Type extends DatePickerType = 'default'> extends BoxProps, DateInputSharedProps, YearPickerBaseProps<Type>, StylesApiProps<YearPickerInputFactory> {
    /** Dayjs format to display input value, "YYYY" by default  */
    valueFormat?: string;
}
export type YearPickerInputFactory = Factory<{
    props: YearPickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: YearPickerInputStylesNames;
    variant: InputVariant;
}>;
type YearPickerInputComponent = (<Type extends DatePickerType = 'default'>(props: YearPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<YearPickerInputFactory>;
export declare const YearPickerInput: YearPickerInputComponent;
export {};
//# sourceMappingURL=YearPickerInput.d.ts.map