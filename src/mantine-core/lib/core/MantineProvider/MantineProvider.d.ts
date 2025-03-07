import './global.css';
import React from 'react';
import { CSSVariablesResolver } from './MantineCssVariables';
import type { MantineColorScheme, MantineThemeOverride } from './theme.types';
import { MantineColorSchemeManager } from './color-scheme-managers';
export interface MantineProviderProps {
    /** Theme override object */
    theme?: MantineThemeOverride;
    /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
    colorSchemeManager?: MantineColorSchemeManager;
    /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
    defaultColorScheme?: MantineColorScheme;
    /** Forces color scheme value, if set, MantineProvider ignores `colorSchemeManager` and `defaultColorScheme` */
    forceColorScheme?: 'light' | 'dark';
    /** CSS selector to which CSS variables should be added, `:root` by default */
    cssVariablesSelector?: string;
    /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
    withCssVariables?: boolean;
    /** Function to resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
    getRootElement?(): HTMLElement | undefined;
    /** A prefix for components static classes (for example {selector}-Text-root), `mantine` by default */
    classNamesPrefix?: string;
    /** Function to generate nonce attribute added to all generated `<style />` tags */
    getStyleNonce?(): string;
    /** Function to generate CSS variables based on theme object */
    cssVariablesResolver?: CSSVariablesResolver;
    /** Your application */
    children?: React.ReactNode;
}
export declare function MantineProvider({ theme, children, getStyleNonce, withCssVariables, cssVariablesSelector, classNamesPrefix, colorSchemeManager, defaultColorScheme, getRootElement, cssVariablesResolver, forceColorScheme, }: MantineProviderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MantineProvider {
    var displayName: string;
}
