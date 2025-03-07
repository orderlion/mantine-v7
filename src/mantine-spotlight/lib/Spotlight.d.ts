import React from 'react';
import { Factory } from '@mantine/core';
import { spotlight } from './spotlight.store';
import { SpotlightSearch, SpotlightSearchProps } from './SpotlightSearch';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightActionsGroup } from './SpotlightActionsGroup';
import { SpotlightRoot, SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';
export type SpotlightFilterFunction = (query: string, actions: SpotlightActions[]) => SpotlightActions[];
export interface SpotlightActionData extends SpotlightActionProps {
    id: string;
    group?: string;
}
export interface SpotlightActionGroupData {
    group: string;
    actions: SpotlightActionData[];
}
export type SpotlightActions = SpotlightActionData | SpotlightActionGroupData;
export type SpotlightStylesNames = SpotlightRootStylesNames;
export interface SpotlightProps extends SpotlightRootProps {
    /** Props passed down to the `Spotlight.Search` */
    searchProps?: SpotlightSearchProps;
    /** Actions data, passed down to `Spotlight.Action` component */
    actions: SpotlightActions[];
    /** Function to filter actions data based on search query, by default actions are filtered by title, description and keywords */
    filter?: SpotlightFilterFunction;
    /** Message displayed when none of the actions match given `filter` */
    nothingFound?: React.ReactNode;
    /** Determines whether search query should be highlighted in action label, `false` by default */
    highlightQuery?: boolean;
    /** Maximum number of actions displayed at a time, `Infinity` by default */
    limit?: number;
}
export type SpotlightFactory = Factory<{
    props: SpotlightProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightStylesNames;
    staticComponents: {
        Search: typeof SpotlightSearch;
        ActionsList: typeof SpotlightActionsList;
        Action: typeof SpotlightAction;
        Empty: typeof SpotlightEmpty;
        Footer: typeof SpotlightFooter;
        ActionsGroup: typeof SpotlightActionsGroup;
        Root: typeof SpotlightRoot;
        open: typeof spotlight.open;
        close: typeof spotlight.close;
        toggle: typeof spotlight.toggle;
    };
}>;
export declare const Spotlight: import("@mantine/core").MantineComponent<{
    props: SpotlightProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightStylesNames;
    staticComponents: {
        Search: typeof SpotlightSearch;
        ActionsList: typeof SpotlightActionsList;
        Action: typeof SpotlightAction;
        Empty: typeof SpotlightEmpty;
        Footer: typeof SpotlightFooter;
        ActionsGroup: typeof SpotlightActionsGroup;
        Root: typeof SpotlightRoot;
        open: typeof spotlight.open;
        close: typeof spotlight.close;
        toggle: typeof spotlight.toggle;
    };
}>;
//# sourceMappingURL=Spotlight.d.ts.map