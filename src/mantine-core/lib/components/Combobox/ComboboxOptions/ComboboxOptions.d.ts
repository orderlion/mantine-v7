import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type ComboboxOptionsStylesNames = 'options';
export interface ComboboxOptionsProps extends BoxProps, StylesApiProps<ComboboxOptionsFactory>, ElementProps<'div'> {
}
export type ComboboxOptionsFactory = Factory<{
    props: ComboboxOptionsProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionsStylesNames;
    compound: true;
}>;
export declare const ComboboxOptions: import("../../../core").MantineComponent<{
    props: ComboboxOptionsProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionsStylesNames;
    compound: true;
}>;
