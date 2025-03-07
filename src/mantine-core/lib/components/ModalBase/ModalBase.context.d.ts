/// <reference types="react" />
import { TransitionOverride } from '../Transition';
interface ModalBaseContextValue {
    titleMounted: boolean;
    bodyMounted: boolean;
    setTitleMounted(value: boolean): void;
    setBodyMounted(value: boolean): void;
    getTitleId(): string;
    getBodyId(): string;
    transitionProps: Partial<TransitionOverride> | undefined;
    zIndex: string | number | undefined;
    opened: boolean;
    onClose(): void;
    closeOnEscape: boolean | undefined;
    trapFocus: boolean | undefined;
    closeOnClickOutside: boolean | undefined;
}
export declare const ModalBaseProvider: ({ children, value }: {
    value: ModalBaseContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useModalBaseContext: () => ModalBaseContextValue;
export {};
