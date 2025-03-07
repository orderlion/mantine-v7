import React from 'react';
import { BoxProps, ElementProps, MantineSize, MantineColor, MantineRadius } from '../../../core';
export interface SliderRootProps extends BoxProps, ElementProps<'div'> {
    size: MantineSize | (string & {}) | number;
    children: React.ReactNode;
    color: MantineColor | undefined;
    disabled: boolean | undefined;
    variant?: string;
    thumbSize: string | number | undefined;
    radius: MantineRadius | (string & {}) | number | undefined;
}
export declare const SliderRoot: React.ForwardRefExoticComponent<SliderRootProps & React.RefAttributes<HTMLDivElement>>;
