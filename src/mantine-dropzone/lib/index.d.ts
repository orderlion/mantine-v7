/// <reference types="react" />
import { DropzoneFullScreen } from './DropzoneFullScreen';
export declare const Dropzone: import("@mantine/core").MantineComponent<{
    props: import("./Dropzone").DropzoneProps;
    ref: HTMLDivElement;
    stylesNames: import("./Dropzone").DropzoneStylesNames;
    vars: import("./Dropzone").DropzoneCssVariables;
    staticComponents: {
        Accept: import("react").FunctionComponent<import("./DropzoneStatus").DropzoneStatusProps>;
        Idle: import("react").FunctionComponent<import("./DropzoneStatus").DropzoneStatusProps>;
        Reject: import("react").FunctionComponent<import("./DropzoneStatus").DropzoneStatusProps>;
        FullScreen: import("@mantine/core").MantineComponent<{
            props: import("./DropzoneFullScreen").DropzoneFullScreenProps;
            ref: HTMLDivElement;
            stylesNames: import("./DropzoneFullScreen").DropzoneFullScreenStylesNames;
            variant: import("./Dropzone").DropzoneVariant;
        }>;
    };
}>;
export { DropzoneFullScreen };
export { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
export * from './mime-types';
export type { DropzoneStylesNames, DropzoneProps, DropzoneCssVariables, DropzoneFactory, DropzoneVariant, } from './Dropzone';
export type { DropzoneFullScreenProps, DropzoneFullScreenStylesNames, DropzoneFullScreenFactory, } from './DropzoneFullScreen';
export type { DropzoneAcceptProps, DropzoneRejectProps, DropzoneIdleProps } from './DropzoneStatus';
export type { FileWithPath, FileRejection } from 'react-dropzone';
//# sourceMappingURL=index.d.ts.map