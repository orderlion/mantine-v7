import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, MantineColor, MantineSize, MantineRadius, Factory } from '../../core';
import { InlineInputStylesNames } from '../InlineInput';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';
export type SwitchStylesNames = 'root' | 'track' | 'trackLabel' | 'thumb' | 'input' | InlineInputStylesNames;
export type SwitchCssVariables = {
    root: '--switch-radius' | '--switch-height' | '--switch-width' | '--switch-thumb-size' | '--switch-label-font-size' | '--switch-track-label-padding' | '--switch-color';
};
export interface SwitchProps extends BoxProps, StylesApiProps<SwitchFactory>, ElementProps<'input', 'size'> {
    /** Id used to bind input and label, if not passed, unique id will be generated instead */
    id?: string;
    /** Switch label */
    label?: React.ReactNode;
    /** Inner label when Switch is in unchecked state */
    offLabel?: React.ReactNode;
    /** Inner label when Switch is in checked state */
    onLabel?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of all elements */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Props passed down to the wrapper element */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Icon inside the thumb of switch */
    thumbIcon?: React.ReactNode;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: 'left' | 'right';
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error displayed below the label */
    error?: React.ReactNode;
}
export type SwitchFactory = Factory<{
    props: SwitchProps;
    ref: HTMLInputElement;
    stylesNames: SwitchStylesNames;
    vars: SwitchCssVariables;
    staticComponents: {
        Group: typeof SwitchGroup;
    };
}>;
export declare const Switch: import("../../core").MantineComponent<{
    props: SwitchProps;
    ref: HTMLInputElement;
    stylesNames: SwitchStylesNames;
    vars: SwitchCssVariables;
    staticComponents: {
        Group: typeof SwitchGroup;
    };
}>;
