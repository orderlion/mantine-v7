import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type SpotlightFooterStylesNames = 'footer';
export interface SpotlightFooterProps extends BoxProps, StylesApiProps<SpotlightFooterFactory>, ElementProps<'div'> {
}
export type SpotlightFooterFactory = Factory<{
    props: SpotlightFooterProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightFooterStylesNames;
    compound: true;
}>;
export declare const SpotlightFooter: import("@mantine/core").MantineComponent<{
    props: SpotlightFooterProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightFooterStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightFooter.d.ts.map