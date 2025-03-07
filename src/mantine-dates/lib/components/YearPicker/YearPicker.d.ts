/// <reference types="react" />
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineComponentStaticProperties } from '@mantine/core';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { PickerBaseProps, DatePickerType } from '../../types';
import { CalendarBaseProps } from '../Calendar';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
export type YearPickerStylesNames = DecadeLevelGroupStylesNames;
export interface YearPickerBaseProps<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, Omit<CalendarBaseProps, 'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth'> {
}
export interface YearPickerProps<Type extends DatePickerType = 'default'> extends BoxProps, YearPickerBaseProps<Type>, StylesApiProps<YearPickerFactory>, ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
    /** Called when year is selected */
    onYearSelect?(date: Date): void;
}
export type YearPickerFactory = Factory<{
    props: YearPickerProps;
    ref: HTMLDivElement;
    stylesNames: YearPickerStylesNames;
}>;
type YearPickerComponent = (<Type extends DatePickerType = 'default'>(props: YearPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<YearPickerFactory>;
export declare const YearPicker: YearPickerComponent;
export {};
//# sourceMappingURL=YearPicker.d.ts.map