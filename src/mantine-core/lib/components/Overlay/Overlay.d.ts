import React from 'react';
import { BoxProps, StylesApiProps, PolymorphicFactory, MantineRadius } from '../../core';
export type OverlayStylesNames = 'root';
export type OverlayCssVariables = {
    root: '--overlay-bg' | '--overlay-filter' | '--overlay-radius' | '--overlay-z-index';
};
export interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
    /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
    backgroundOpacity?: number;
    /** Overlay `background-color`, `#000` by default */
    color?: React.CSSProperties['backgroundColor'];
    /** Overlay background blur, `0` by default */
    blur?: number | string;
    /** Changes overlay to gradient. If set, `color` prop is ignored */
    gradient?: string;
    /** Overlay z-index, `200` by default */
    zIndex?: string | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Content inside overlay */
    children?: React.ReactNode;
    /** Determines whether content inside overlay should be vertically and horizontally centered, `false` by default */
    center?: boolean;
    /** Determines whether overlay should have fixed position instead of absolute, `false` by default */
    fixed?: boolean;
}
export type OverlayFactory = PolymorphicFactory<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}>;
export declare const Overlay: (<C = "div">(props: import("../../core/factory/create-polymorphic-component").PolymorphicComponentProps<C, OverlayProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(OverlayProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof OverlayProps> & {
    ref?: any;
}) | (OverlayProps & {
    component: React.ElementType<any>;
})>, never> & import("../../core/factory/factory").ThemeExtend<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}> & import("../../core/factory/factory").ComponentClasses<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}> & Record<string, never>;
