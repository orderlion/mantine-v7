import React from 'react';
import { NotificationProps } from '@mantine/core';
import { NotificationData } from './notifications.store';
interface NotificationContainerProps extends NotificationProps {
    data: NotificationData;
    onHide(id: string): void;
    autoClose: number | false;
}
export declare const NotificationContainer: React.ForwardRefExoticComponent<NotificationContainerProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=NotificationContainer.d.ts.map