import React from 'react';
import { FileRejection, Accept, FileWithPath, DropEvent, FileError } from 'react-dropzone';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineRadius, MantineColor } from '@mantine/core';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
import type { DropzoneFullScreenType } from './DropzoneFullScreen';
export type DropzoneStylesNames = 'root' | 'inner';
export type DropzoneVariant = 'filled' | 'light';
export type DropzoneCssVariables = {
    root: '--dropzone-radius' | '--dropzone-accept-color' | '--dropzone-accept-bg' | '--dropzone-reject-color' | '--dropzone-reject-bg';
};
export interface DropzoneProps extends BoxProps, StylesApiProps<DropzoneFactory>, ElementProps<'div', 'onDrop'> {
    /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Accept`, `theme.primaryColor` by default */
    acceptColor?: MantineColor;
    /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Reject`, `'red'` by default */
    rejectColor?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Determines whether files capturing should be disabled, `false` by default */
    disabled?: boolean;
    /** Called when any files are dropped to the dropzone */
    onDropAny?(files: FileWithPath[], fileRejections: FileRejection[]): void;
    /** Called when valid files are dropped to the dropzone */
    onDrop(files: FileWithPath[]): void;
    /** Called when dropped files do not meet file restrictions */
    onReject?(fileRejections: FileRejection[]): void;
    /** Determines whether a loading overlay should be displayed over the dropzone, `false` by default */
    loading?: boolean;
    /** Mime types of the files that dropzone can accepts. By default, dropzone accepts all file types. */
    accept?: Accept | string[];
    /** A ref function which when called opens the file system file picker */
    openRef?: React.ForwardedRef<() => void | undefined>;
    /** Determines whether multiple files can be dropped to the dropzone or selected from file system picker, `true` by default */
    multiple?: boolean;
    /** Maximum file size in bytes */
    maxSize?: number;
    /** Name of the form control. Submitted with the form as part of a name/value pair. */
    name?: string;
    /** Maximum number of files that can be picked at once */
    maxFiles?: number;
    /** Set to autofocus the root element */
    autoFocus?: boolean;
    /** If `false`, disables click to open the native file selection dialog */
    activateOnClick?: boolean;
    /** If `false`, disables drag 'n' drop */
    activateOnDrag?: boolean;
    /** If `false`, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. */
    activateOnKeyboard?: boolean;
    /** If `false`, stops drag event propagation to parents */
    dragEventsBubbling?: boolean;
    /** Called when the `dragenter` event occurs */
    onDragEnter?(event: React.DragEvent<HTMLElement>): void;
    /** Called when the `dragleave` event occurs */
    onDragLeave?(event: React.DragEvent<HTMLElement>): void;
    /** Called when the `dragover` event occurs */
    onDragOver?(event: React.DragEvent<HTMLElement>): void;
    /** Called when user closes the file selection dialog with no selection */
    onFileDialogCancel?(): void;
    /** Called when user opens the file selection dialog */
    onFileDialogOpen?(): void;
    /** If `false`, allow dropped items to take over the current browser window */
    preventDropOnDocument?: boolean;
    /** Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true */
    useFsAccessApi?: boolean;
    /** Use this to provide a custom file aggregator */
    getFilesFromEvent?: (event: DropEvent) => Promise<Array<File | DataTransferItem>>;
    /** Custom validation function. It must return null if there's no errors. */
    validator?: <T extends File>(file: T) => FileError | FileError[] | null;
}
export type DropzoneFactory = Factory<{
    props: DropzoneProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneStylesNames;
    vars: DropzoneCssVariables;
    staticComponents: {
        Accept: typeof DropzoneAccept;
        Idle: typeof DropzoneIdle;
        Reject: typeof DropzoneReject;
        FullScreen: DropzoneFullScreenType;
    };
}>;
export declare const Dropzone: import("@mantine/core").MantineComponent<{
    props: DropzoneProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneStylesNames;
    vars: DropzoneCssVariables;
    staticComponents: {
        Accept: typeof DropzoneAccept;
        Idle: typeof DropzoneIdle;
        Reject: typeof DropzoneReject;
        FullScreen: DropzoneFullScreenType;
    };
}>;
//# sourceMappingURL=Dropzone.d.ts.map