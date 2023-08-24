import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { ConfiguratorControl } from './types';
export type ConfiguratorBooleanControlOptions = ConfiguratorControl<'boolean', {
    initialValue: boolean;
}>;
export interface ConfiguratorBooleanControlProps extends BoxProps, ElementProps<'input', 'onChange' | 'value' | 'size'> {
    value: boolean;
    onChange(value: boolean): void;
    prop: string;
}
export declare function ConfiguratorBooleanControl({ value, onChange, prop, ...others }: ConfiguratorBooleanControlProps): React.JSX.Element;
