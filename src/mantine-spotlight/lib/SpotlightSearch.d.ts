import { BoxProps, StylesApiProps, ElementProps, Factory, InputProps, InputStylesNames } from '@mantine/core';
export type SpotlightSearchStylesNames = InputStylesNames;
export interface SpotlightSearchProps extends BoxProps, Omit<InputProps, 'classNames' | 'styles' | 'vars' | 'variant'>, StylesApiProps<SpotlightSearchFactory>, ElementProps<'input', 'size'> {
}
export type SpotlightSearchFactory = Factory<{
    props: SpotlightSearchProps;
    ref: HTMLInputElement;
    stylesNames: SpotlightSearchStylesNames;
    compound: true;
}>;
export declare const SpotlightSearch: import("@mantine/core").MantineComponent<{
    props: SpotlightSearchProps;
    ref: HTMLInputElement;
    stylesNames: SpotlightSearchStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightSearch.d.ts.map