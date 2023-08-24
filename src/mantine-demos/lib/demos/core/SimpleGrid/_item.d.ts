import React from 'react';
import { BoxProps, ElementProps } from '@mantine/core';
interface GridItemProps extends BoxProps, ElementProps<'div'> {
}
export declare function GridItem({ className, children, ...others }: GridItemProps): React.JSX.Element;
export declare const defaultItems: React.JSX.Element[];
export {};
