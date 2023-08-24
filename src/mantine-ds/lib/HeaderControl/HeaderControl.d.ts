import React from 'react';
import { BoxProps } from '@mantine/core';
export interface HeaderControlProps extends BoxProps {
    tooltip: string;
    children: React.ReactNode;
}
export declare const HeaderControl: (<C = "button">(props: import("../../../mantine-core/src/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, HeaderControlProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(HeaderControlProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof HeaderControlProps> & {
    ref?: any;
}) | (HeaderControlProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
