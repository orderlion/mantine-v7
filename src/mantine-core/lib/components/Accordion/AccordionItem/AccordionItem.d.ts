import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type AccordionItemStylesNames = 'item';
export interface AccordionItemProps extends BoxProps, StylesApiProps<AccordionItemFactory>, ElementProps<'div'> {
    /** Value that is used to manage accordion state */
    value: string;
}
export type AccordionItemFactory = Factory<{
    props: AccordionItemProps;
    ref: HTMLDivElement;
    stylesNames: AccordionItemStylesNames;
    compound: true;
}>;
export declare const AccordionItem: import("../../../core").MantineComponent<{
    props: AccordionItemProps;
    ref: HTMLDivElement;
    stylesNames: AccordionItemStylesNames;
    compound: true;
}>;
