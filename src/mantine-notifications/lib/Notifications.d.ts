import { BoxProps, StylesApiProps, ElementProps, Factory, PortalProps } from '@mantine/core';
import { NotificationsStore, notifications } from './notifications.store';
export type NotificationsStylesNames = 'root' | 'notification';
export type NotificationsCssVariables = {
    root: '--notifications-z-index' | '--notifications-top' | '--notifications-right' | '--notifications-left' | '--notifications-left' | '--notifications-transform' | '--notifications-container-width';
};
export interface NotificationsProps extends BoxProps, StylesApiProps<NotificationsFactory>, ElementProps<'div'> {
    /** Notifications position, `'bottom-right'` by default */
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function, `4000` by defualt */
    autoClose?: number | false;
    /** Notification transition duration in ms, `250` by default */
    transitionDuration?: number;
    /** Notification width, cannot exceed 100%, `440` by default */
    containerWidth?: number | string;
    /** Notification `max-height`, used for transitions, `200` by default */
    notificationMaxHeight?: number | string;
    /** Maximum number of notifications displayed at a time, other new notifications will be added to queue, `5` by default */
    limit?: number;
    /** Notifications container z-index, `400` by default */
    zIndex?: string | number;
    /** Props passed down to the `Portal` component */
    portalProps?: Omit<PortalProps, 'children'>;
    /** Store for notifications state, can be used to create multiple instances of notifications system in your application */
    store?: NotificationsStore;
    /** Determines whether notifications container should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
}
export type NotificationsFactory = Factory<{
    props: NotificationsProps;
    ref: HTMLDivElement;
    stylesNames: NotificationsStylesNames;
    vars: NotificationsCssVariables;
    staticComponents: {
        show: typeof notifications.show;
        hide: typeof notifications.hide;
        update: typeof notifications.update;
        clean: typeof notifications.clean;
        cleanQueue: typeof notifications.cleanQueue;
        updateState: typeof notifications.updateState;
    };
}>;
export declare const Notifications: import("@mantine/core").MantineComponent<{
    props: NotificationsProps;
    ref: HTMLDivElement;
    stylesNames: NotificationsStylesNames;
    vars: NotificationsCssVariables;
    staticComponents: {
        show: typeof notifications.show;
        hide: typeof notifications.hide;
        update: typeof notifications.update;
        clean: typeof notifications.clean;
        cleanQueue: typeof notifications.cleanQueue;
        updateState: typeof notifications.updateState;
    };
}>;
//# sourceMappingURL=Notifications.d.ts.map