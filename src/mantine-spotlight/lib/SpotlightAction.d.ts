import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineColor } from '@mantine/core';
export type SpotlightActionStylesNames = 'action' | 'actionLabel' | 'actionDescription' | 'actionSection' | 'actionBody';
export interface SpotlightActionProps extends BoxProps, StylesApiProps<SpotlightActionFactory>, ElementProps<'button'> {
    /** Action label, pass string to use in default filter */
    label?: string;
    /** Action description, pass string to use in default filter */
    description?: string;
    /** Section displayed on the left side of the label, for example, icon */
    leftSection?: React.ReactNode;
    /** Section displayed on the right side of the label, for example, hotkey */
    rightSection?: React.ReactNode;
    /** Children override default action elements, if passed, label, description and sections are hidden */
    children?: React.ReactNode;
    /** Determines whether left and right sections should have dimmed styles, `true` by default */
    dimmedSections?: boolean;
    /** Determines whether search query should be highlighted in action label, `false` by default */
    highlightQuery?: boolean;
    /** Key of `theme.colors` of any valid CSS color that will be used to highlight search query, `'yellow'` by default */
    highlightColor?: MantineColor;
    /** Determines whether the spotlight should be closed when action is triggered, overrides `closeOnActionTrigger` prop set on `Spotlight` */
    closeSpotlightOnTrigger?: boolean;
    /** Keywords that are used for default filtering, not displayed anywhere, can be a string: "react,router,javascript" or an array: ['react', 'router', 'javascript'] */
    keywords?: string | string[];
}
export type SpotlightActionFactory = Factory<{
    props: SpotlightActionProps;
    ref: HTMLButtonElement;
    stylesNames: SpotlightActionStylesNames;
    compound: true;
}>;
export declare const SpotlightAction: import("@mantine/core").MantineComponent<{
    props: SpotlightActionProps;
    ref: HTMLButtonElement;
    stylesNames: SpotlightActionStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightAction.d.ts.map