import { BoxProps, StylesApiProps, ElementProps, Factory, StyleProp, MantineSpacing } from '../../core';
export type SimpleGridStylesNames = 'root';
export interface SimpleGridProps extends BoxProps, StylesApiProps<SimpleGridFactory>, ElementProps<'div'> {
    /** Number of columns, `1` by default */
    cols?: StyleProp<number>;
    /** Spacing between columns, `'md'` by default */
    spacing?: StyleProp<MantineSpacing | (string & {}) | number>;
    /** Spacing between rows, `'md'` by default */
    verticalSpacing?: StyleProp<MantineSpacing | (string & {}) | number>;
}
export type SimpleGridFactory = Factory<{
    props: SimpleGridProps;
    ref: HTMLDivElement;
    stylesNames: SimpleGridStylesNames;
}>;
export declare const SimpleGrid: import("../../core").MantineComponent<{
    props: SimpleGridProps;
    ref: HTMLDivElement;
    stylesNames: SimpleGridStylesNames;
}>;
