import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { ConfiguratorControl } from './types';
export type ConfiguratorSizeControlOptions = ConfiguratorControl<'size', {
    initialValue: string;
}>;
export interface ConfiguratorSizeControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
    value: string;
    onChange(value: string): void;
    prop: string;
}
export declare function ConfiguratorSizeControl({ value, onChange, prop, ...others }: ConfiguratorSizeControlProps): React.JSX.Element;
