import {notification} from "antd";
import React from "react";
type NotificationType = 'success' | 'info' | 'warning' | 'error';
const CustomMessage: (message: string, type: NotificationType) => void = (message: string, type: NotificationType) => {

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
}

export default CustomMessage;