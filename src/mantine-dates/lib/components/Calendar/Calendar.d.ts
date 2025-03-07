import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { MonthLevelGroupStylesNames } from '../MonthLevelGroup';
import { YearLevelGroupStylesNames } from '../YearLevelGroup';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { CalendarLevel } from '../../types';
import { MonthLevelSettings } from '../MonthLevel';
import { YearLevelSettings } from '../YearLevel';
import { DecadeLevelSettings } from '../DecadeLevel';
export type CalendarStylesNames = MonthLevelGroupStylesNames | YearLevelGroupStylesNames | DecadeLevelGroupStylesNames;
export interface CalendarAriaLabels {
    monthLevelControl?: string;
    yearLevelControl?: string;
    nextMonth?: string;
    previousMonth?: string;
    nextYear?: string;
    previousYear?: string;
    nextDecade?: string;
    previousDecade?: string;
}
type OmittedSettings = 'onNext' | 'onPrevious' | 'onLevelClick' | 'withNext' | 'withPrevious' | 'nextDisabled' | 'previousDisabled';
export interface CalendarSettings extends Omit<DecadeLevelSettings, OmittedSettings>, Omit<YearLevelSettings, OmittedSettings>, Omit<MonthLevelSettings, OmittedSettings> {
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
    /** Called when user clicks year on decade level */
    onYearSelect?(date: Date): void;
    /** Called when user clicks month on year level */
    onMonthSelect?(date: Date): void;
    /** Called when mouse enters year control */
    onYearMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters month control */
    onMonthMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
}
export interface CalendarBaseProps {
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Determines whether date should be updated when year control is clicked */
    __updateDateOnYearSelect?: boolean;
    /** Determines whether date should be updated when month control is clicked */
    __updateDateOnMonthSelect?: boolean;
    /** Initial date that is displayed, used for uncontrolled component */
    defaultDate?: Date;
    /** Date that is displayed, used for controlled component */
    date?: Date;
    /** Called when date changes */
    onDateChange?(date: Date): void;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
    /** Called when next decade button is clicked */
    onNextDecade?(date: Date): void;
    /** Called when previous decade button is clicked */
    onPreviousDecade?(date: Date): void;
    /** Called when next year button is clicked */
    onNextYear?(date: Date): void;
    /** Called when previous year button is clicked */
    onPreviousYear?(date: Date): void;
    /** Called when next month button is clicked */
    onNextMonth?(date: Date): void;
    /** Called when previous month button is clicked */
    onPreviousMonth?(date: Date): void;
}
export interface CalendarProps extends BoxProps, CalendarSettings, CalendarBaseProps, StylesApiProps<CalendarFactory>, ElementProps<'div'> {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Min level that user can go down to (decade, year, month), defaults to month */
    minLevel?: CalendarLevel;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export type CalendarFactory = Factory<{
    props: CalendarProps;
    ref: HTMLDivElement;
    stylesNames: CalendarStylesNames;
}>;
export declare const Calendar: import("@mantine/core").MantineComponent<{
    props: CalendarProps;
    ref: HTMLDivElement;
    stylesNames: CalendarStylesNames;
}>;
export {};
//# sourceMappingURL=Calendar.d.ts.map