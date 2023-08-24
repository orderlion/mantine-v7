import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type RichTextEditorContentStylesNames = 'root';
export interface RichTextEditorContentProps extends BoxProps, StylesApiProps<RichTextEditorContentFactory>, ElementProps<'div'> {
}
export type RichTextEditorContentFactory = Factory<{
    props: RichTextEditorContentProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorContentStylesNames;
    compound: true;
}>;
export declare const RichTextEditorContent: import("@mantine/core").MantineComponent<{
    props: RichTextEditorContentProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorContentStylesNames;
    compound: true;
}>;
//# sourceMappingURL=RichTextEditorContent.d.ts.map