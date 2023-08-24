import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { SelectData } from './transform-select-data';
import { ConfiguratorControl } from './types';
export type ConfiguratorSelectControlOptions = ConfiguratorControl<'select', {
    data: SelectData;
    initialValue: string;
}>;
export interface ConfiguratorSelectControlProps extends BoxProps, ElementProps<'select', 'onChange' | 'value' | 'size'> {
    value: string;
    data: SelectData;
    onChange(value: string): void;
    prop: string;
}
export declare function ConfiguratorSelectControl({ value, onChange, prop, data, ...others }: ConfiguratorSelectControlProps): React.JSX.Element;
