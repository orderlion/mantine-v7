import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSize, MantineColor, MantineRadius } from '../../../core';
export type PaginationRootStylesNames = 'root' | 'control' | 'dots';
export type PaginationRootCssVariables = {
    root: '--pagination-control-size' | '--pagination-control-radius' | '--pagination-control-fz' | '--pagination-active-bg';
};
export interface PaginationRootProps extends BoxProps, StylesApiProps<PaginationRootFactory>, ElementProps<'div', 'value' | 'onChange'> {
    /** `height` and `min-width` of controls, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Total number of pages, must be an integer */
    total: number;
    /** Active page for controlled component, must be an integer in [0, total] interval */
    value?: number;
    /** Active page for uncontrolled component, must be an integer in [0, total] interval */
    defaultValue?: number;
    /** Called when page changes */
    onChange?(value: number): void;
    /** Determines whether all controls should be disabled, `false` by default */
    disabled?: boolean;
    /** Number of siblings displayed on the left/right side of the selected page, `1` by default */
    siblings?: number;
    /** Number of elements visible on the left/right edges, `1` by default */
    boundaries?: number;
    /** Key of `theme.colors`, active item color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Called when next page control is clicked */
    onNextPage?(): void;
    /** Called when previous page control is clicked */
    onPreviousPage?(): void;
    /** Called when first page control is clicked */
    onFirstPage?(): void;
    /** Called when last page control is clicked */
    onLastPage?(): void;
    /** Additional props passed down to controls */
    getItemProps?(page: number): Record<string, any>;
}
export type PaginationRootFactory = Factory<{
    props: PaginationRootProps;
    ref: HTMLDivElement;
    stylesNames: PaginationRootStylesNames;
    vars: PaginationRootCssVariables;
}>;
export declare const PaginationRoot: import("../../../core").MantineComponent<{
    props: PaginationRootProps;
    ref: HTMLDivElement;
    stylesNames: PaginationRootStylesNames;
    vars: PaginationRootCssVariables;
}>;
