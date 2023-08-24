/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { ListFactory } from './List';
interface ListContextValue {
    getStyles: GetStylesApi<ListFactory>;
    center: boolean | undefined;
    icon: React.ReactNode | undefined;
}
export declare const ListProvider: ({ children, value }: {
    value: ListContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useListContext: () => ListContextValue;
export {};
