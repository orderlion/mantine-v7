import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { ConfiguratorControl } from './types';
export type ConfiguratorColorControlOptions = ConfiguratorControl<'color', {
    initialValue: string;
}>;
export interface ConfiguratorColorControlProps extends BoxProps, ElementProps<'div', 'onChange' | 'value' | 'size'> {
    value: string;
    onChange(value: string): void;
    prop: string;
}
export declare function ConfiguratorColorControl({ value, onChange, prop, ...others }: ConfiguratorColorControlProps): React.JSX.Element;
