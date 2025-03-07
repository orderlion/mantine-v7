import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineRadius, MantineSize, MantineColor } from '../../core';
import { ChipGroup } from './ChipGroup/ChipGroup';
export type ChipStylesNames = 'root' | 'input' | 'iconWrapper' | 'checkIcon' | 'label';
export type ChipVariant = 'outline' | 'filled' | 'light';
export type ChipCssVariables = {
    root: '--chip-fz' | '--chip-size' | '--chip-icon-size' | '--chip-padding' | '--chip-checked-padding' | '--chip-radius' | '--chip-bg' | '--chip-hover' | '--chip-color' | '--chip-bd' | '--chip-spacing';
};
export interface ChipProps extends BoxProps, StylesApiProps<ChipFactory>, ElementProps<'input', 'size' | 'onChange'> {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Controls various properties, `'sm'` by default */
    size?: MantineSize;
    /** Chip input type */
    type?: 'radio' | 'checkbox';
    /** Chip label */
    children: React.ReactNode;
    /** Checked state for controlled component */
    checked?: boolean;
    /** Default checked state for uncontrolled component */
    defaultChecked?: boolean;
    /** Calls when checked state changes */
    onChange?(checked: boolean): void;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` */
    color?: MantineColor;
    /** Static id to bind input with label */
    id?: string;
    /** Props passed down to the wrapper element */
    wrapperProps?: Record<string, any>;
    /** Replaces default icon */
    icon?: React.ReactNode;
}
export type ChipFactory = Factory<{
    props: ChipProps;
    ref: HTMLInputElement;
    stylesNames: ChipStylesNames;
    vars: ChipCssVariables;
    variant: ChipVariant;
    staticComponents: {
        Group: typeof ChipGroup;
    };
}>;
export declare const Chip: import("../../core").MantineComponent<{
    props: ChipProps;
    ref: HTMLInputElement;
    stylesNames: ChipStylesNames;
    vars: ChipCssVariables;
    variant: ChipVariant;
    staticComponents: {
        Group: typeof ChipGroup;
    };
}>;
