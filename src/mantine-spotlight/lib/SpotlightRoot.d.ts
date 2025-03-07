import React from 'react';
import { StylesApiProps, Factory, ModalProps, ModalStylesNames } from '@mantine/core';
import { SpotlightStore } from './spotlight.store';
export type SpotlightRootStylesNames = ModalStylesNames | 'search' | 'actionsList' | 'action' | 'empty' | 'footer' | 'actionBody' | 'actionLabel' | 'actionDescription' | 'actionSection' | 'actionsGroup';
export interface SpotlightRootProps extends StylesApiProps<SpotlightRootFactory>, Omit<ModalProps, 'styles' | 'classNames' | 'vars' | 'variant' | 'opened' | 'onClose' | 'closeButtonProps' | 'withCloseButton'> {
    /** Spotlight store, can be used to create multiple instances of spotlight */
    store?: SpotlightStore;
    /** Controlled Spotlight search query */
    query?: string;
    /** Called when query changes */
    onQueryChange?(query: string): void;
    /** Determines whether the search query should be cleared when the spotlight is closed, `true` by default */
    clearQueryOnClose?: boolean;
    /** Keyboard shortcut or a list of shortcuts to trigger spotlight, `'mod + K'` by default */
    shortcut?: string | string[] | null;
    /** A list of tags which when focused will be ignored by shortcut, `['input', 'textarea', 'select']` by default */
    tagsToIgnore?: string[];
    /** Determines whether shortcut should trigger based in contentEditable, `false` by default */
    triggerOnContentEditable?: boolean;
    /** If set, spotlight will not be rendered */
    disabled?: boolean;
    /** Called when spotlight opens */
    onSpotlightOpen?(): void;
    /** Called when spotlight closes */
    onSpotlightClose?(): void;
    /** Forces opened state, useful for tests */
    forceOpened?: boolean;
    /** Determines whether spotlight should be closed when one of the actions is triggered, `true` by default */
    closeOnActionTrigger?: boolean;
    /** Spotlight content max-height. Ignored unless `scrollable` prop is set. `400` by default */
    maxHeight?: React.CSSProperties['maxHeight'];
    /** Determines whether the actions list should be scrollable. If not set, `maxHeight` is ignored, `false` by default */
    scrollable?: boolean;
}
export type SpotlightRootFactory = Factory<{
    props: SpotlightRootProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightRootStylesNames;
    compound: true;
}>;
export declare const SpotlightRoot: import("@mantine/core").MantineComponent<{
    props: SpotlightRootProps;
    ref: HTMLDivElement;
    stylesNames: SpotlightRootStylesNames;
    compound: true;
}>;
//# sourceMappingURL=SpotlightRoot.d.ts.map