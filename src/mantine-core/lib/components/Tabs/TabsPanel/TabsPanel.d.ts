import React from 'react';
import { BoxProps, ElementProps, StylesApiProps, Factory } from '../../../core';
export type TabsPanelStylesNames = 'panel';
export interface TabsPanelProps extends BoxProps, StylesApiProps<TabsPanelFactory>, ElementProps<'div'> {
    /** Panel content */
    children: React.ReactNode;
    /** Value of associated control */
    value: string;
}
export type TabsPanelFactory = Factory<{
    props: TabsPanelProps;
    ref: HTMLDivElement;
    stylesNames: TabsPanelStylesNames;
    compound: true;
}>;
export declare const TabsPanel: import("../../../core").MantineComponent<{
    props: TabsPanelProps;
    ref: HTMLDivElement;
    stylesNames: TabsPanelStylesNames;
    compound: true;
}>;
