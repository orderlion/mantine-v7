/// <reference types="react" />
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineComponentStaticProperties } from '@mantine/core';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { CalendarBaseProps, CalendarSettings, CalendarStylesNames } from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { MonthLevelBaseSettings } from '../MonthLevel';
export type DatePickerStylesNames = CalendarStylesNames;
export interface DatePickerBaseProps<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, YearLevelBaseSettings, MonthLevelBaseSettings, CalendarBaseProps, CalendarSettings {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
}
export interface DatePickerProps<Type extends DatePickerType = 'default'> extends BoxProps, DatePickerBaseProps<Type>, StylesApiProps<DatePickerFactory>, ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
}
export type DatePickerFactory = Factory<{
    props: DatePickerProps;
    ref: HTMLDivElement;
    stylesNames: DatePickerStylesNames;
}>;
type DatePickerComponent = (<Type extends DatePickerType = 'default'>(props: DatePickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<DatePickerFactory>;
export declare const DatePicker: DatePickerComponent;
export {};
//# sourceMappingURL=DatePicker.d.ts.map