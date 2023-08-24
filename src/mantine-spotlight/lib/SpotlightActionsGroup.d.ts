import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type SpotlightActionsGroupStylesNames = 'actionsGroup';
export interface SpotlightActionsGroupProps extends BoxProps, StylesApiProps<SpotlightActionsGroupFactory>, ElementProps<'div'> {
    /** `Spotlight.Action` components */
    children?: React.ReactNode;
    /** Group label */
    label?: React.ReactNode;
}
export type SpotlightActionsGroupFactory = Factory<{
    props: SpotlightActionsGroupProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightActionsGroupStylesNames;
    compound: true;
}>;
export declare const SpotlightActionsGroup: import("@mantine/core").MantineComponent<{
    props: SpotlightActionsGroupProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightActionsGroupStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightActionsGroup.d.ts.map