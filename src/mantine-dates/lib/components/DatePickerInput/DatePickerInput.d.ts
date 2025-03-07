/// <reference types="react" />
import { BoxProps, StylesApiProps, Factory, InputVariant, __InputStylesNames, MantineComponentStaticProperties } from '@mantine/core';
import { CalendarStylesNames } from '../Calendar';
import { DatePickerBaseProps } from '../DatePicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps } from '../PickerInputBase';
export type DatePickerInputStylesNames = __InputStylesNames | CalendarStylesNames;
export interface DatePickerInputProps<Type extends DatePickerType = 'default'> extends BoxProps, DateInputSharedProps, DatePickerBaseProps<Type>, StylesApiProps<DatePickerInputFactory> {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
}
export type DatePickerInputFactory = Factory<{
    props: DatePickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: DatePickerInputStylesNames;
    variant: InputVariant;
}>;
type DatePickerInputComponent = (<Type extends DatePickerType = 'default'>(props: DatePickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<DatePickerInputFactory>;
export declare const DatePickerInput: DatePickerInputComponent;
export {};
//# sourceMappingURL=DatePickerInput.d.ts.map