import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type ComboboxHeaderStylesNames = 'header';
export interface ComboboxHeaderProps extends BoxProps, StylesApiProps<ComboboxHeaderFactory>, ElementProps<'div'> {
}
export type ComboboxHeaderFactory = Factory<{
    props: ComboboxHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxHeaderStylesNames;
    compound: true;
}>;
export declare const ComboboxHeader: import("../../../core").MantineComponent<{
    props: ComboboxHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxHeaderStylesNames;
    compound: true;
}>;
