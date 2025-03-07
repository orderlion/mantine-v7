import { MantineStore } from '@mantine/store';
export interface SpotlightState {
    opened: boolean;
    selected: number;
    listId: string;
    query: string;
    empty: boolean;
    registeredActions: Set<string>;
}
export type SpotlightStore = MantineStore<SpotlightState>;
export declare const createSpotlightStore: () => MantineStore<SpotlightState>;
export declare const useSpotlight: (store: SpotlightStore) => SpotlightState;
export declare function updateSpotlightStateAction(update: (state: SpotlightState) => Partial<SpotlightState>, store: SpotlightStore): void;
export declare function openSpotlightAction(store: SpotlightStore): void;
export declare function closeSpotlightAction(store: SpotlightStore): void;
export declare function toggleSpotlightAction(store: SpotlightStore): void;
export declare function setSelectedAction(index: number, store: SpotlightStore): void;
export declare function setListId(id: string, store: SpotlightStore): void;
export declare function selectAction(index: number, store: SpotlightStore): number;
export declare function selectNextAction(store: SpotlightStore): number;
export declare function selectPreviousAction(store: SpotlightStore): number;
export declare function triggerSelectedAction(store: SpotlightStore): void;
export declare function registerAction(id: string, store: SpotlightStore): () => void;
export declare function setQuery(query: string, store: SpotlightStore): void;
export declare function clearSpotlightState({ clearQuery }: {
    clearQuery: boolean | undefined;
}, store: SpotlightStore): void;
export declare const spotlightActions: {
    open: typeof openSpotlightAction;
    close: typeof closeSpotlightAction;
    toggle: typeof toggleSpotlightAction;
    updateState: typeof updateSpotlightStateAction;
    setSelectedAction: typeof setSelectedAction;
    setListId: typeof setListId;
    selectAction: typeof selectAction;
    selectNextAction: typeof selectNextAction;
    selectPreviousAction: typeof selectPreviousAction;
    triggerSelectedAction: typeof triggerSelectedAction;
    registerAction: typeof registerAction;
    setQuery: typeof setQuery;
    clearSpotlightState: typeof clearSpotlightState;
};
export declare function createSpotlight(): readonly [MantineStore<SpotlightState>, {
    open: () => void;
    close: () => void;
    toggle: () => void;
}];
export declare const spotlightStore: MantineStore<SpotlightState>, spotlight: {
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export declare const openSpotlight: () => void, closeSpotlight: () => void, toggleSpotlight: () => void;
//# sourceMappingURL=spotlight.store.d.ts.map