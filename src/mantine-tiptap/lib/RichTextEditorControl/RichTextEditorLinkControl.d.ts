import { BoxProps, StylesApiProps, Factory, PopoverProps } from '@mantine/core';
import { RichTextEditorControlBaseProps } from './RichTextEditorControl';
export type RichTextEditorLinkControlStylesNames = 'linkEditor' | 'linkEditorDropdown' | 'linkEditorSave' | 'linkEditorInput' | 'linkEditorExternalControl';
export interface RichTextEditorLinkControlProps extends BoxProps, Omit<RichTextEditorControlBaseProps, 'classNames' | 'styles' | 'vars'>, StylesApiProps<RichTextEditorLinkControlFactory> {
    /** Props passed down to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Determines whether external link control tooltip should be disabled, `false` by default */
    disableTooltips?: boolean;
    /** Initial state for determining whether the link should be an external, `false` by default */
    initialExternal?: boolean;
}
export type RichTextEditorLinkControlFactory = Factory<{
    props: RichTextEditorLinkControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorLinkControlStylesNames;
    compound: true;
}>;
export declare const RichTextEditorLinkControl: import("@mantine/core").MantineComponent<{
    props: RichTextEditorLinkControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorLinkControlStylesNames;
    compound: true;
}>;
//# sourceMappingURL=RichTextEditorLinkControl.d.ts.map