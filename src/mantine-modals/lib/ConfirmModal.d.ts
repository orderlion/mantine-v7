import React from 'react';
import { ButtonProps, GroupProps } from '@mantine/core';
import { ConfirmLabels } from './context';
export interface ConfirmModalProps {
    id?: string;
    children?: React.ReactNode;
    onCancel?(): void;
    onConfirm?(): void;
    closeOnConfirm?: boolean;
    closeOnCancel?: boolean;
    cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
    confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
    groupProps?: GroupProps;
    labels?: ConfirmLabels;
}
export declare function ConfirmModal({ id, cancelProps, confirmProps, labels, closeOnConfirm, closeOnCancel, groupProps, onCancel, onConfirm, children, }: ConfirmModalProps): React.JSX.Element;
//# sourceMappingURL=ConfirmModal.d.ts.map