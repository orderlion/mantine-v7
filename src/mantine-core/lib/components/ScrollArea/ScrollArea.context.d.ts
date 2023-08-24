/// <reference types="react" />
export interface ScrollAreaContextValue {
    type: 'auto' | 'always' | 'scroll' | 'hover' | 'never';
    scrollHideDelay: number;
    scrollArea: HTMLDivElement | null;
    viewport: HTMLDivElement | null;
    onViewportChange(viewport: HTMLDivElement | null): void;
    content: HTMLDivElement | null;
    onContentChange(content: HTMLDivElement): void;
    scrollbarX: HTMLDivElement | null;
    onScrollbarXChange(scrollbar: HTMLDivElement | null): void;
    scrollbarXEnabled: boolean;
    onScrollbarXEnabledChange(rendered: boolean): void;
    scrollbarY: HTMLDivElement | null;
    onScrollbarYChange(scrollbar: HTMLDivElement | null): void;
    scrollbarYEnabled: boolean;
    onScrollbarYEnabledChange(rendered: boolean): void;
    onCornerWidthChange(width: number): void;
    onCornerHeightChange(height: number): void;
}
export declare const ScrollAreaProvider: ({ children, value }: {
    value: ScrollAreaContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useScrollAreaContext: () => ScrollAreaContextValue;
