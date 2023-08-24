import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { ConfiguratorControl } from './types';
export type ConfiguratorStringControlOptions = ConfiguratorControl<'string', {
    initialValue: string;
}>;
export interface ConfiguratorStringControlProps extends BoxProps, ElementProps<'input', 'onChange' | 'value' | 'size'> {
    value: string;
    onChange(value: string): void;
    prop: string;
}
export declare function ConfiguratorStringControl({ value, onChange, prop, ...others }: ConfiguratorStringControlProps): React.JSX.Element;
