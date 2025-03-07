import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineColor, MantineSize, MantineRadius } from '../../core';
import { InlineInputStylesNames } from '../InlineInput';
import { RadioIconProps } from './RadioIcon';
import { RadioGroup } from './RadioGroup/RadioGroup';
export type RadioStylesNames = InlineInputStylesNames | 'inner' | 'radio' | 'icon';
export type RadioCssVariables = {
    root: '--radio-size' | '--radio-radius' | '--radio-color';
};
export interface RadioProps extends BoxProps, StylesApiProps<RadioFactory>, ElementProps<'input', 'size'> {
    /** Radio label */
    label?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of all elements, `'sm'` by default */
    size?: MantineSize;
    /** Custom checked icon component, by default a circle is displayed in checked state */
    icon?: React.FC<RadioIconProps>;
    /** Props passed down to the root element */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: 'left' | 'right';
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error displayed below the label */
    error?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius | (string & {}) | number;
}
export type RadioFactory = Factory<{
    props: RadioProps;
    ref: HTMLInputElement;
    stylesNames: RadioStylesNames;
    vars: RadioCssVariables;
    staticComponents: {
        Group: typeof RadioGroup;
    };
}>;
export declare const Radio: import("../../core").MantineComponent<{
    props: RadioProps;
    ref: HTMLInputElement;
    stylesNames: RadioStylesNames;
    vars: RadioCssVariables;
    staticComponents: {
        Group: typeof RadioGroup;
    };
}>;
