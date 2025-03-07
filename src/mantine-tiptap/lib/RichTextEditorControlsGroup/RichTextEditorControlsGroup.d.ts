import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type RichTextEditorControlsGroupStylesNames = 'controlsGroup';
export interface RichTextEditorControlsGroupProps extends BoxProps, StylesApiProps<RichTextEditorControlsGroupFactory>, ElementProps<'div'> {
}
export type RichTextEditorControlsGroupFactory = Factory<{
    props: RichTextEditorControlsGroupProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorControlsGroupStylesNames;
    compound: true;
}>;
export declare const RichTextEditorControlsGroup: import("@mantine/core").MantineComponent<{
    props: RichTextEditorControlsGroupProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorControlsGroupStylesNames;
    compound: true;
}>;
//# sourceMappingURL=RichTextEditorControlsGroup.d.ts.map