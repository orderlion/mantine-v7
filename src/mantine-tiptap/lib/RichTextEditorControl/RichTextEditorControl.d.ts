import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
import { RichTextEditorLabels } from '../labels';
export type RichTextEditorControlStylesNames = 'control';
export interface RichTextEditorControlProps extends BoxProps, StylesApiProps<RichTextEditorControlFactory>, ElementProps<'button'> {
    /** Determines whether the control should have active state, false by default */
    active?: boolean;
    /** Determines whether the control can be interacted with, set `false` to make the control to act as a label */
    interactive?: boolean;
}
export type RichTextEditorControlFactory = Factory<{
    props: RichTextEditorControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorControlStylesNames;
    compound: true;
}>;
export declare const RichTextEditorControl: import("@mantine/core").MantineComponent<{
    props: RichTextEditorControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorControlStylesNames;
    compound: true;
}>;
export interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
    icon?: React.FC<{
        style: React.CSSProperties;
    }>;
}
export declare const RichTextEditorControlBase: React.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React.RefAttributes<HTMLButtonElement>>;
export interface CreateControlProps {
    label: keyof RichTextEditorLabels;
    icon: React.FC<{
        style: React.CSSProperties;
    }>;
    isActive?: {
        name: string;
        attributes?: Record<string, any> | string;
    };
    operation: {
        name: string;
        attributes?: Record<string, any> | string;
    };
}
export declare function createControl({ label, isActive, operation, icon }: CreateControlProps): React.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=RichTextEditorControl.d.ts.map