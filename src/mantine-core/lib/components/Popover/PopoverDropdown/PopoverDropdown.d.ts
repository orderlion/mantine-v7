import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
import type { PopoverStylesNames } from '../Popover';
export interface PopoverDropdownProps extends BoxProps, StylesApiProps<PopoverDropdownFactory>, ElementProps<'div'> {
}
export type PopoverDropdownFactory = Factory<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
    compound: true;
}>;
export declare const PopoverDropdown: import("../../../core").MantineComponent<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
    compound: true;
}>;
