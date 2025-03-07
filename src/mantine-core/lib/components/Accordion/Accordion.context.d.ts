/// <reference types="react" />
import { GetStylesApi } from '../../core';
import { AccordionChevronPosition, AccordionHeadingOrder } from './Accordion.types';
import type { AccordionFactory } from './Accordion';
interface AccordionContext {
    loop: boolean | undefined;
    transitionDuration: number | undefined;
    disableChevronRotation: boolean | undefined;
    chevronPosition: AccordionChevronPosition | undefined;
    order: AccordionHeadingOrder | undefined;
    chevron: React.ReactNode;
    onChange(value: string): void;
    isItemActive(value: string): boolean;
    getControlId(value: string): string;
    getRegionId(value: string): string;
    getStyles: GetStylesApi<AccordionFactory>;
    variant: string | undefined;
}
export declare const AccordionProvider: ({ children, value }: {
    value: AccordionContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useAccordionContext: () => AccordionContext;
export {};
