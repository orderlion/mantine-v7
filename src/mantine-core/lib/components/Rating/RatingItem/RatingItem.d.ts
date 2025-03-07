import React from 'react';
import { MantineSize, BoxProps, ElementProps } from '../../../core';
export interface RatingItemProps extends BoxProps, ElementProps<'input', 'value' | 'size'> {
    size: MantineSize;
    getSymbolLabel: ((value: number) => string) | undefined;
    emptyIcon?: React.ReactNode | ((value: number) => React.ReactNode);
    fullIcon?: React.ReactNode | ((value: number) => React.ReactNode);
    full: boolean;
    active: boolean;
    fractionValue: number;
    value: number;
    id: string;
    onChange(event: React.ChangeEvent<HTMLInputElement> | number): void;
}
export declare function RatingItem({ size, getSymbolLabel, emptyIcon, fullIcon, full, active, value, readOnly, fractionValue, color, id, onChange, style, ...others }: RatingItemProps): import("react/jsx-runtime").JSX.Element;
export declare namespace RatingItem {
    var displayName: string;
}
