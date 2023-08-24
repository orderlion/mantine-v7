import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type SpotlightEmptyStylesNames = 'empty';
export interface SpotlightEmptyProps extends BoxProps, StylesApiProps<SpotlightEmptyFactory>, ElementProps<'div'> {
}
export type SpotlightEmptyFactory = Factory<{
    props: SpotlightEmptyProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightEmptyStylesNames;
    compound: true;
}>;
export declare const SpotlightEmpty: import("@mantine/core").MantineComponent<{
    props: SpotlightEmptyProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightEmptyStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightEmpty.d.ts.map