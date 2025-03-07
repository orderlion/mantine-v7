import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineBreakpoint, MantineSpacing } from '../../core';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
import { AppShellHeader } from './AppShellHeader/AppShellHeader';
import { AppShellFooter } from './AppShellFooter/AppShellFooter';
import { AppShellAside } from './AppShellAside/AppShellAside';
import { AppShellMain } from './AppShellMain/AppShellMain';
import { AppShellSection } from './AppShellSection/AppShellSection';
export type AppShellStylesNames = 'root' | 'navbar' | 'main' | 'header' | 'footer' | 'aside' | 'section';
export type AppShellCssVariables = {
    root: '--app-shell-transition-duration' | '--app-shell-transition-timing-function';
};
export type AppShellSize = number | (string & {});
export interface AppShellResponsiveSize {
    base?: AppShellSize;
    xs?: AppShellSize;
    sm?: AppShellSize;
    md?: AppShellSize;
    lg?: AppShellSize;
    xl?: AppShellSize;
    [key: string]: AppShellSize | undefined;
}
export interface AppShellProps extends BoxProps, StylesApiProps<AppShellFactory>, ElementProps<'div'> {
    /** Determines whether associated components should have a border, `true` by default */
    withBorder?: boolean;
    /** Main content section padding, `0` by default */
    padding?: MantineSpacing | AppShellSize | AppShellResponsiveSize;
    /** Navbar configuration */
    navbar?: {
        width: AppShellSize | AppShellResponsiveSize;
        breakpoint: MantineBreakpoint | (string & {}) | number;
        collapsed?: {
            desktop?: boolean;
            mobile?: boolean;
        };
    };
    /** Aside configuration */
    aside?: {
        width: AppShellSize | AppShellResponsiveSize;
        breakpoint: MantineBreakpoint | (string & {}) | number;
        collapsed?: {
            desktop?: boolean;
            mobile?: boolean;
        };
    };
    /** Header configuration */
    header?: {
        height: AppShellSize | AppShellResponsiveSize;
        collapsed?: boolean;
        offset?: boolean;
    };
    /** Footer configuration */
    footer?: {
        height: AppShellSize | AppShellResponsiveSize;
        collapsed?: boolean;
        offset?: boolean;
    };
    /** Duration of all transitions in ms, `200` by default */
    transitionDuration?: number;
    /** Timing function of all transitions, `ease` by default */
    transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];
    /** `z-index` of all associated elements, `200` by default */
    zIndex?: string | number;
    /** Determines how Navbar/Aside are arranged relative to Header/Footer, `default` by default */
    layout?: 'default' | 'alt';
    /** If set, Navbar, Aside, Header and Footer components will not be rendered */
    disabled?: boolean;
}
export type AppShellFactory = Factory<{
    props: AppShellProps;
    ref: HTMLDivElement;
    stylesNames: AppShellStylesNames;
    vars: AppShellCssVariables;
    staticComponents: {
        Navbar: typeof AppShellNavbar;
        Header: typeof AppShellHeader;
        Main: typeof AppShellMain;
        Aside: typeof AppShellAside;
        Footer: typeof AppShellFooter;
        Section: typeof AppShellSection;
    };
}>;
export declare const AppShell: import("../../core").MantineComponent<{
    props: AppShellProps;
    ref: HTMLDivElement;
    stylesNames: AppShellStylesNames;
    vars: AppShellCssVariables;
    staticComponents: {
        Navbar: typeof AppShellNavbar;
        Header: typeof AppShellHeader;
        Main: typeof AppShellMain;
        Aside: typeof AppShellAside;
        Footer: typeof AppShellFooter;
        Section: typeof AppShellSection;
    };
}>;
