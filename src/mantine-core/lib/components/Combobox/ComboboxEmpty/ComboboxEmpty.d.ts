import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type ComboboxEmptyStylesNames = 'empty';
export interface ComboboxEmptyProps extends BoxProps, StylesApiProps<ComboboxEmptyFactory>, ElementProps<'div'> {
}
export type ComboboxEmptyFactory = Factory<{
    props: ComboboxEmptyProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxEmptyStylesNames;
    compound: true;
}>;
export declare const ComboboxEmpty: import("../../../core").MantineComponent<{
    props: ComboboxEmptyProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxEmptyStylesNames;
    compound: true;
}>;
