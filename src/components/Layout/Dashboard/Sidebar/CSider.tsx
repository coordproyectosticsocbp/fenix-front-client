'use client'
import React, {useState} from "react"
import {
    AlertOutlined,
    AuditOutlined,
    BookOutlined,
    DesktopOutlined,
    FolderViewOutlined,
    IssuesCloseOutlined,
    MonitorOutlined,
    PieChartOutlined,
    SecurityScanOutlined,
    SettingOutlined,
    SolutionOutlined,
} from '@ant-design/icons';
import {Menu, type MenuProps} from "antd"
import { useRouter } from 'next/navigation'

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const items: MenuItem[] = [
    getItem('Dashboard', '/dashboard', <PieChartOutlined/>),
    getItem('Notificaciones', '/notifications', <AlertOutlined/>),
    getItem('Crear Reporte', '3', <SolutionOutlined/>),
    getItem('Resumen', '4', <DesktopOutlined/>),
    getItem('Validación', 'sub1', <SecurityScanOutlined/>, [
        getItem('Validar', '5'),
        getItem('Casos para revisión', '6'),
    ]),
    getItem('Análisis', 'sub2', <MonitorOutlined/>, [
        getItem('Asignación de casos', '7'),
        getItem('Mis Casos', '8'),
        getItem('Informes', '9'),
    ]),
    getItem('Seguimientos', '10', <FolderViewOutlined/>),
    getItem('Planes de acción', 'sub3', <BookOutlined/>, [
        getItem('Planes Creados', '11'),
        getItem('Monitoreo', '12'),
    ]),
    getItem('Análisis de riesgo', 'sub4', <AlertOutlined/>, [
        getItem('Resumen', '13'),
        getItem('Matriz de riesgo', '14'),
        getItem('Informe', '15'),
    ]),
    getItem('Programa de SP', 'sub5', <AuditOutlined/>, [
        getItem('Estrategias', '16'),
        getItem('Informe', '17'),
        getItem('Marco de sanciones', '18'),
    ]),
    getItem('Cierre de ciclo', '19', <IssuesCloseOutlined/>),
    getItem('Indicadores', '20', <PieChartOutlined/>),
    getItem('Configuración', '21', <SettingOutlined/>, [
        getItem('Asociaciones', '22', '', [
            getItem('Tipo de Sucesos','/configuration/associations'),
            getItem('Sucesos','24'),
            getItem('Análisis Tools','25'),
        ]),
        getItem('Riesgos','26'),
        getItem('Estrategias de SP','27'),
    ]),
];

const CSider = () => {

    const router = useRouter()
    const handleMenuClick = (menu: any) => {
        return router.push(menu.key);
    }

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
        />
    )
}

export default CSider