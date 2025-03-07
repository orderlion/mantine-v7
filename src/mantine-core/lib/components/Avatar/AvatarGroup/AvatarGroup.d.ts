import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSpacing } from '../../../core';
export type AvatarGroupStylesNames = 'group';
export type AvatarGroupCssVariables = {
    group: '--ag-spacing';
};
export interface AvatarGroupProps extends BoxProps, StylesApiProps<AvatarGroupFactory>, ElementProps<'div'> {
    /** Negative space between Avatar components, `'sm'` by default */
    spacing?: MantineSpacing | (string & {}) | number;
}
export type AvatarGroupFactory = Factory<{
    props: AvatarGroupProps;
    ref: HTMLDivElement;
    stylesNames: AvatarGroupStylesNames;
    vars: AvatarGroupCssVariables;
}>;
export declare const AvatarGroup: import("../../../core").MantineComponent<{
    props: AvatarGroupProps;
    ref: HTMLDivElement;
    stylesNames: AvatarGroupStylesNames;
    vars: AvatarGroupCssVariables;
}>;
