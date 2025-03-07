import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, PortalProps } from '@mantine/core';
import { DropzoneProps, DropzoneVariant, DropzoneStylesNames } from './Dropzone';
export type DropzoneFullScreenStylesNames = DropzoneStylesNames | 'fullScreen';
export interface DropzoneFullScreenProps extends BoxProps, Omit<DropzoneProps, 'styles' | 'classNames' | 'vars' | 'variant'>, StylesApiProps<DropzoneFullScreenFactory>, ElementProps<'div', 'onDragLeave' | 'onDragOver' | 'onDrop' | 'onDragEnter'> {
    /** Determines whether user can drop files to browser window, true by default */
    active?: boolean;
    /** z-index value, 9999 by default */
    zIndex?: React.CSSProperties['zIndex'];
    /** Determines whether component should be rendered within Portal, true by default */
    withinPortal?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;
}
export type DropzoneFullScreenFactory = Factory<{
    props: DropzoneFullScreenProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneFullScreenStylesNames;
    variant: DropzoneVariant;
}>;
export declare const DropzoneFullScreen: import("@mantine/core").MantineComponent<{
    props: DropzoneFullScreenProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneFullScreenStylesNames;
    variant: DropzoneVariant;
}>;
export type DropzoneFullScreenType = typeof DropzoneFullScreen;
//# sourceMappingURL=DropzoneFullScreen.d.ts.map