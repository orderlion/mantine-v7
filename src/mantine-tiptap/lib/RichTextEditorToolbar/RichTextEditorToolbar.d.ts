import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type RichTextEditorToolbarStylesNames = 'toolbar';
export interface RichTextEditorToolbarProps extends BoxProps, StylesApiProps<RichTextEditorToolbarFactory>, ElementProps<'div'> {
    /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
    sticky?: boolean;
    /** Sets top style to offset elements with fixed position, `0` by default */
    stickyOffset?: React.CSSProperties['top'];
}
export type RichTextEditorToolbarFactory = Factory<{
    props: RichTextEditorToolbarProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorToolbarStylesNames;
    compound: true;
}>;
export declare const RichTextEditorToolbar: import("@mantine/core").MantineComponent<{
    props: RichTextEditorToolbarProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorToolbarStylesNames;
    compound: true;
}>;
//# sourceMappingURL=RichTextEditorToolbar.d.ts.map