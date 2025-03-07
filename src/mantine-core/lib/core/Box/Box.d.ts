import React from 'react';
import { MantineBreakpoint } from '../MantineProvider';
import type { MantineStyleProp, CssVarsProp } from './Box.types';
import { MantineStyleProps } from './style-props';
export type Mod = Record<string, any> | string;
export type BoxMod = Mod | Mod[] | BoxMod[];
export interface BoxProps extends MantineStyleProps {
    /** Class added to the root element, if applicable */
    className?: string;
    /** Inline style added to root component element, can subscribe to theme defined on MantineProvider */
    style?: MantineStyleProp;
    /** CSS variables defined on root component element */
    __vars?: CssVarsProp;
    /** Breakpoint above which the component is hidden with `display: none` */
    hiddenFrom?: MantineBreakpoint;
    /** Breakpoint below which the component is hidden with `display: none` */
    visibleFrom?: MantineBreakpoint;
}
export type ElementProps<ElementType extends React.ElementType, PropsToOmit extends string = never> = Omit<React.ComponentPropsWithoutRef<ElementType>, 'style' | PropsToOmit>;
export interface BoxComponentProps extends BoxProps {
    /** Variant passed from parent component, sets `data-variant` */
    variant?: string;
    /** Size passed from parent component, sets `data-size` if value is not number like */
    size?: string | number;
    /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
    mod?: BoxMod;
}
export declare const Box: (<C = "div">(props: import("../factory/create-polymorphic-component").PolymorphicComponentProps<C, BoxComponentProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BoxComponentProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BoxComponentProps> & {
    ref?: any;
}) | (BoxComponentProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
