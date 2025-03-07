/// <reference types="react" />
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineComponentStaticProperties } from '@mantine/core';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { CalendarBaseProps } from '../Calendar';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { YearLevelGroupStylesNames } from '../YearLevelGroup';
export type MonthPickerStylesNames = DecadeLevelGroupStylesNames | YearLevelGroupStylesNames;
type MonthPickerLevel = Exclude<CalendarLevel, 'month'>;
export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, YearLevelBaseSettings, Omit<CalendarBaseProps, 'onNextMonth' | 'onPreviousMonth'> {
    /** Max level that user can go up to (decade, year), defaults to decade */
    maxLevel?: MonthPickerLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: MonthPickerLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: MonthPickerLevel;
    /** Called when level changes */
    onLevelChange?(level: MonthPickerLevel): void;
}
export interface MonthPickerProps<Type extends DatePickerType = 'default'> extends BoxProps, MonthPickerBaseProps<Type>, StylesApiProps<MonthPickerFactory>, ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
    /** Called when month is selected */
    onMonthSelect?(date: Date): void;
}
export type MonthPickerFactory = Factory<{
    props: MonthPickerProps;
    ref: HTMLDivElement;
    stylesNames: MonthPickerStylesNames;
}>;
type MonthPickerComponent = (<Type extends DatePickerType = 'default'>(props: MonthPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & MantineComponentStaticProperties<MonthPickerFactory>;
export declare const MonthPicker: MonthPickerComponent;
export {};
//# sourceMappingURL=MonthPicker.d.ts.map