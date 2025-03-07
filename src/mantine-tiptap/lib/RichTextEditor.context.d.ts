/// <reference types="react" />
import { GetStylesApi } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { RichTextEditorLabels } from './labels';
import type { RichTextEditorFactory } from './RichTextEditor';
interface RichTextEditorContext {
    getStyles: GetStylesApi<RichTextEditorFactory>;
    editor: Editor | null;
    labels: RichTextEditorLabels;
    withCodeHighlightStyles: boolean | undefined;
    withTypographyStyles: boolean | undefined;
}
export declare const RichTextEditorProvider: ({ children, value }: {
    value: RichTextEditorContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useRichTextEditorContext: () => RichTextEditorContext;
export {};
//# sourceMappingURL=RichTextEditor.context.d.ts.map