import React, { useState } from "react";
import {Button, Col, Row, Table, Tooltip} from "antd"
import {PlusOutlined} from "@ant-design/icons";
import CreateStrategyButtonComponent
    from "@/components/configuration/associations/CreateStrategyButton/CreateStrategyButtonComponent";
import { IEventTypeItem } from "@/utils/interfaces/configuration/eventType.interface";

const columns: any = [
    {
        title: 'Estrategia',
        dataIndex: 'address',
    },
    {
        title: 'Cantidad de Sucesos',
        dataIndex: 'address',
    },
    {
        title: 'Tipo de caso',
        dataIndex: 'address',
    },
    {
        title: 'Acciones',
        dataIndex: 'address',
    },
]
const data: any = []
const ConfigurationAssociations: React.FC = () => {

    const [eventType, setEventType] = useState<IEventTypeItem[]>([]);

    return (
        <div style={{padding: '1rem'}}>

            <Row style={{marginBottom: '2rem'}}>
                <Col span={24} style={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                    <CreateStrategyButtonComponent />
                </Col>
            </Row>

            <Row style={{marginBottom: '2rem'}}>
                <Col span={24} >
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                    />
                </Col>
            </Row>

        </div>
    )
}

export default ConfigurationAssociations;