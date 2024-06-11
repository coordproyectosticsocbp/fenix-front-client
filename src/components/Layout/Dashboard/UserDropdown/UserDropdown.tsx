import React from "react";
import {DownOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import type { MenuProps } from 'antd';
import {Dropdown, Space} from "antd";

const items: MenuProps['items'] = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Configuración
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Personalización
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'Salir',
        key: '3',
        icon: <LogoutOutlined />
    },
];
const UserDropdown: React.FC = () => (
    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <Dropdown.Button menu={{ items }} placement="bottom" icon={<UserOutlined />}>
            <a onClick={(e) => e.preventDefault()}>
                Hola, Camilo Salgado
            </a>
        </Dropdown.Button>
    </div>
)

export default UserDropdown