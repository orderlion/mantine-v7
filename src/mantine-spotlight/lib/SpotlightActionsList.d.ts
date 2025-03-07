import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type SpotlightActionsListStylesNames = 'actionsList' | 'actionsListInner';
export interface SpotlightActionsListProps extends BoxProps, StylesApiProps<SpotlightActionsListFactory>, ElementProps<'div'> {
}
export type SpotlightActionsListFactory = Factory<{
    props: SpotlightActionsListProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightActionsListStylesNames;
    compound: true;
}>;
export declare const SpotlightActionsList: import("@mantine/core").MantineComponent<{
    props: SpotlightActionsListProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightActionsListStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightActionsList.d.ts.map