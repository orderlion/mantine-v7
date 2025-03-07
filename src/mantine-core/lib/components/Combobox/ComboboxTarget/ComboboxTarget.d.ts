import React from 'react';
import { Factory } from '../../../core';
export interface ComboboxTargetProps {
    /** Target element */
    children: React.ReactNode;
    /** Key of the prop that should be used to access element ref */
    refProp?: string;
    /** Determines whether component should respond to keyboard events, `true` by default */
    withKeyboardNavigation?: boolean;
    /** Determines whether the target should have `aria-` attributes, `true` by default */
    withAriaAttributes?: boolean;
    /** Determines which events should be handled by the target element.
     * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
     * `input` by default.
     * */
    targetType?: 'button' | 'input';
}
export type ComboboxTargetFactory = Factory<{
    props: ComboboxTargetProps;
    ref: HTMLElement;
    compound: true;
}>;
export declare const ComboboxTarget: import("../../../core").MantineComponent<{
    props: ComboboxTargetProps;
    ref: HTMLElement;
    compound: true;
}>;
