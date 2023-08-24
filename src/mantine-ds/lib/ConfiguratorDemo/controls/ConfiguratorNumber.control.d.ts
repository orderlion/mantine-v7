import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { ConfiguratorControl } from './types';
export type ConfiguratorNumberControlOptions = ConfiguratorControl<'number', {
    initialValue: number;
    min?: number;
    max?: number;
    step?: number;
}>;
export interface ConfiguratorNumberControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
    value: number;
    onChange(value: number): void;
    prop: string;
    step?: number;
    min?: number;
    max?: number;
}
export declare function ConfiguratorNumberControl({ value, onChange, prop, step, min, max, ...others }: ConfiguratorNumberControlProps): React.JSX.Element;
