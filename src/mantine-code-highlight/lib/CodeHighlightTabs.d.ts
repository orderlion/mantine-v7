import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type CodeHighlightTabsStylesNames = 'root' | 'code' | 'codeWrapper' | 'showCodeButton' | 'pre' | 'controls' | 'control' | 'header' | 'file' | 'files' | 'fileIcon';
export type CodeHighlightTabsCssVariables = {
    root: '--ch-max-collapsed-height';
};
export interface CodeHighlightTabsCode {
    language?: string;
    code: string;
    fileName?: string;
    icon?: React.ReactNode;
}
export interface CodeHighlightTabsProps extends BoxProps, StylesApiProps<CodeHighlightTabsFactory>, ElementProps<'div'> {
    /** Code to highlight with meta data (file name and icon) */
    code: CodeHighlightTabsCode | CodeHighlightTabsCode[];
    /** Default active tab index */
    defaultActiveTab?: number;
    /** Index of controlled active tab state */
    activeTab?: number;
    /** Called when tab changes */
    onTabChange?(tab: number): void;
    /** Determines whether header with file names and copy button should be rendered, `true` by default */
    withHeader?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Function that returns icon based on file name */
    getFileIcon?(fileName: string): React.ReactNode;
    /** `max-height` of code in collapsed state */
    maxCollapsedHeight?: React.CSSProperties['maxHeight'];
    /** Controlled expanded state */
    expanded?: boolean;
    /** Uncontrolled expanded state initial value */
    defaultExpanded?: boolean;
    /** Called when expanded state changes */
    onExpandedChange?(expanded: boolean): void;
    /** Expand button label and tooltip, `'Expand code'` by default */
    expandCodeLabel?: string;
    /** Collapse button label and tooltip, `'Collapse code'` by default */
    collapseCodeLabel?: string;
    /** Determines whether to show the expand button, `false` by default */
    withExpandButton?: boolean;
}
export type CodeHighlightTabsFactory = Factory<{
    props: CodeHighlightTabsProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightTabsStylesNames;
}>;
export declare const CodeHighlightTabs: import("@mantine/core").MantineComponent<{
    props: CodeHighlightTabsProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightTabsStylesNames;
}>;
