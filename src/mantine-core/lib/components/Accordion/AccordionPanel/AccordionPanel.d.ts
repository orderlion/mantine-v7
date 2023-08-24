import { BoxProps, StylesApiProps, ElementProps, Factory } from '../../../core';
export type AccordionPanelStylesNames = 'panel' | 'content';
export interface AccordionPanelProps extends BoxProps, StylesApiProps<AccordionPanelFactory>, ElementProps<'div', 'onTransitionEnd'> {
}
export type AccordionPanelFactory = Factory<{
    props: AccordionPanelProps;
    ref: HTMLDivElement;
    stylesNames: AccordionPanelStylesNames;
    compound: true;
}>;
export declare const AccordionPanel: import("../../../core").MantineComponent<{
    props: AccordionPanelProps;
    ref: HTMLDivElement;
    stylesNames: AccordionPanelStylesNames;
    compound: true;
}>;
