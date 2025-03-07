/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { MenuFactory } from './Menu';
interface MenuContext {
    toggleDropdown(): void;
    closeDropdownImmediately(): void;
    closeDropdown(): void;
    openDropdown(): void;
    getItemIndex(node: HTMLButtonElement): number | null;
    setHovered(index: number | null): void;
    hovered: number | null;
    closeOnItemClick: boolean | undefined;
    loop: boolean | undefined;
    trigger: 'click' | 'hover' | undefined;
    opened: boolean;
    getStyles: GetStylesApi<MenuFactory>;
}
export declare const MenuContextProvider: ({ children, value }: {
    value: MenuContext;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useMenuContext: () => MenuContext;
export {};
