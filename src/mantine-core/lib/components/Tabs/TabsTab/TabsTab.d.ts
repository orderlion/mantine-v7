import React from 'react';
import { ElementProps, MantineColor, StylesApiProps, Factory } from '../../../core';
import { UnstyledButtonProps } from '../../UnstyledButton';
export type TabsTabStylesNames = 'tab' | 'tabSection' | 'tabLabel';
export interface TabsTabProps extends Omit<UnstyledButtonProps, 'classNames' | 'styles' | 'vars'>, StylesApiProps<TabsTabFactory>, ElementProps<'button'> {
    /** Value of associated panel */
    value: string;
    /** Tab label */
    children?: React.ReactNode;
    /** Content displayed on the right side of the label, for example, icon */
    rightSection?: React.ReactNode;
    /** Content displayed on the left side of the label, for example, icon */
    leftSection?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color, controls control color based on `variant` */
    color?: MantineColor;
}
export type TabsTabFactory = Factory<{
    props: TabsTabProps;
    ref: HTMLButtonElement;
    stylesNames: TabsTabStylesNames;
    compound: true;
}>;
export declare const TabsTab: import("../../../core").MantineComponent<{
    props: TabsTabProps;
    ref: HTMLButtonElement;
    stylesNames: TabsTabStylesNames;
    compound: true;
}>;
