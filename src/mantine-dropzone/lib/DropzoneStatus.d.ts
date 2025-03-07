import React from 'react';
export interface DropzoneStatusProps {
    children: React.ReactNode;
}
type DropzoneStatusComponent = React.FC<DropzoneStatusProps>;
export declare const DropzoneAccept: DropzoneStatusComponent;
export declare const DropzoneReject: DropzoneStatusComponent;
export declare const DropzoneIdle: DropzoneStatusComponent;
export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
export {};
//# sourceMappingURL=DropzoneStatus.d.ts.map