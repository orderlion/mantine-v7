import React from 'react';
import { StylesApiProps, Factory, MantineSize } from '../../core';
import { __PopoverProps } from '../Popover';
import { ComboboxStore } from './use-combobox/use-combobox';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import { ComboboxOption, ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxSearch } from './ComboboxSearch/ComboboxSearch';
import { ComboboxEmpty } from './ComboboxEmpty/ComboboxEmpty';
import { ComboboxChevron } from './ComboboxChevron/ComboboxChevron';
import { ComboboxFooter } from './ComboboxFooter/ComboboxFooter';
import { ComboboxHeader } from './ComboboxHeader/ComboboxHeader';
import { ComboboxEventsTarget } from './ComboboxEventsTarget/ComboboxEventsTarget';
import { ComboboxDropdownTarget } from './ComboboxDropdownTarget/ComboboxDropdownTarget';
import { ComboboxGroup } from './ComboboxGroup/ComboboxGroup';
export type ComboboxStylesNames = 'options' | 'dropdown' | 'option' | 'search' | 'empty' | 'footer' | 'header' | 'group' | 'groupLabel';
export type ComboboxCSSVariables = {
    options: '--combobox-option-fz' | '--combobox-option-padding';
    dropdown: '--combobox-padding' | '--combobox-option-fz' | '--combobox-option-padding';
};
export interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
    __staticSelector?: string;
    /** Combobox content */
    children?: React.ReactNode;
    /** Combobox store, can be used to control combobox state */
    store?: ComboboxStore;
    /** Called when item is selected with `Enter` key or by clicking it */
    onOptionSubmit?(value: string, optionProps: ComboboxOptionProps): void;
    /** Controls items `font-size` and `padding`, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Controls `padding` of the dropdown, `4` by default */
    dropdownPadding?: React.CSSProperties['padding'];
    /** Determines whether selection should be reset when option is hovered, `false` by default */
    resetSelectionOnOptionHover?: boolean;
}
export type ComboboxFactory = Factory<{
    props: ComboboxProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxStylesNames;
    vars: ComboboxCSSVariables;
    staticComponents: {
        Target: typeof ComboboxTarget;
        Dropdown: typeof ComboboxDropdown;
        Options: typeof ComboboxOptions;
        Option: typeof ComboboxOption;
        Search: typeof ComboboxSearch;
        Empty: typeof ComboboxEmpty;
        Chevron: typeof ComboboxChevron;
        Footer: typeof ComboboxFooter;
        Header: typeof ComboboxHeader;
        EventsTarget: typeof ComboboxEventsTarget;
        DropdownTarget: typeof ComboboxDropdownTarget;
        Group: typeof ComboboxGroup;
    };
}>;
export declare function Combobox(_props: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Combobox {
    var classes: any;
    var displayName: string;
    var Target: import("../../core").MantineComponent<{
        props: import("./ComboboxTarget/ComboboxTarget").ComboboxTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Dropdown: import("../../core").MantineComponent<{
        props: import("./ComboboxDropdown/ComboboxDropdown").ComboboxDropdownProps;
        ref: HTMLDivElement;
        stylesNames: "dropdown";
        compound: true;
    }>;
    var Options: import("../../core").MantineComponent<{
        props: import("./ComboboxOptions/ComboboxOptions").ComboboxOptionsProps;
        ref: HTMLDivElement;
        stylesNames: "options";
        compound: true;
    }>;
    var Option: import("../../core").MantineComponent<{
        props: ComboboxOptionProps;
        ref: HTMLDivElement;
        stylesNames: "option";
        compound: true;
    }>;
    var Search: import("../../core").MantineComponent<{
        props: import("./ComboboxSearch/ComboboxSearch").ComboboxSearchProps;
        ref: HTMLInputElement;
        stylesNames: import("..").InputStylesNames;
    }>;
    var Empty: import("../../core").MantineComponent<{
        props: import("./ComboboxEmpty/ComboboxEmpty").ComboboxEmptyProps;
        ref: HTMLDivElement;
        stylesNames: "empty";
        compound: true;
    }>;
    var Chevron: import("../../core").MantineComponent<{
        props: import("./ComboboxChevron/ComboboxChevron").ComboboxChevronProps;
        ref: SVGSVGElement;
        stylesNames: "chevron";
        vars: import("./ComboboxChevron/ComboboxChevron").ComboboxChevronCSSVariables;
    }>;
    var Footer: import("../../core").MantineComponent<{
        props: import("./ComboboxFooter/ComboboxFooter").ComboboxFooterProps;
        ref: HTMLDivElement;
        stylesNames: "footer";
        compound: true;
    }>;
    var Header: import("../../core").MantineComponent<{
        props: import("./ComboboxHeader/ComboboxHeader").ComboboxHeaderProps;
        ref: HTMLDivElement;
        stylesNames: "header";
        compound: true;
    }>;
    var EventsTarget: import("../../core").MantineComponent<{
        props: import("./ComboboxEventsTarget/ComboboxEventsTarget").ComboboxEventsTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var DropdownTarget: import("../../core").MantineComponent<{
        props: import("./ComboboxDropdownTarget/ComboboxDropdownTarget").ComboboxDropdownTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Group: import("../../core").MantineComponent<{
        props: import("./ComboboxGroup/ComboboxGroup").ComboboxGroupProps;
        ref: HTMLDivElement;
        stylesNames: import("./ComboboxGroup/ComboboxGroup").ComboboxGroupStylesNames;
        compound: true;
    }>;
}
