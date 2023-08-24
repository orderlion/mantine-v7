import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
import { SelectData } from './transform-select-data';
import { ConfiguratorControl } from './types';
export type ConfiguratorSegmentedControlOptions = ConfiguratorControl<'segmented', {
    data: SelectData;
    initialValue: string;
}>;
export interface ConfiguratorSegmentedControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
    data: SelectData;
    value: string;
    onChange(value: string): void;
    prop: string;
}
export declare function ConfiguratorSegmentedControl({ data, value, onChange, prop, ...others }: ConfiguratorSegmentedControlProps): React.JSX.Element;
