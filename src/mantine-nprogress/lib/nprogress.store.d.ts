import { MantineStore } from '@mantine/store';
export interface NprogressState {
    mounted: boolean;
    progress: number;
    interval: number;
    step: number;
    stepInterval: number;
    timeouts: number[];
}
export type NprogressStore = MantineStore<NprogressState>;
export declare const createNprogressStore: () => MantineStore<NprogressState>;
export declare const useNprogress: (store: NprogressStore) => NprogressState;
export declare function updateNavigationProgressStateAction(update: (state: NprogressState) => Partial<NprogressState>, store: NprogressStore): void;
export declare function decrementNavigationProgressAction(store: NprogressStore): void;
export declare function setNavigationProgressAction(value: number, store: NprogressStore): void;
export declare function cleanupNavigationProgressAction(store: NprogressStore): void;
export declare function completeNavigationProgressAction(store: NprogressStore): void;
export declare function startNavigationProgressAction(store: NprogressStore): void;
export declare function stopNavigationProgressAction(store: NprogressStore): void;
export declare function resetNavigationProgressAction(store: NprogressStore): void;
export declare function incrementNavigationProgressAction(store: NprogressStore): void;
export declare function createNprogress(): readonly [MantineStore<NprogressState>, {
    start: () => void;
    stop: () => void;
    reset: () => void;
    set: (value: number) => void;
    increment: () => void;
    decrement: () => void;
    complete: () => void;
    cleanup: () => void;
}];
export declare const nprogressStore: MantineStore<NprogressState>, nprogress: {
    start: () => void;
    stop: () => void;
    reset: () => void;
    set: (value: number) => void;
    increment: () => void;
    decrement: () => void;
    complete: () => void;
    cleanup: () => void;
};
export declare const startNavigationProgress: () => void, stopNavigationProgress: () => void, resetNavigationProgress: () => void, setNavigationProgress: (value: number) => void, incrementNavigationProgress: () => void, decrementNavigationProgress: () => void, completeNavigationProgress: () => void, cleanupNavigationProgress: () => void;
//# sourceMappingURL=nprogress.store.d.ts.map