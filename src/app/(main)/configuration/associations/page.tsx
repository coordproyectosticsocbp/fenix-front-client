import React from "react";
import {Button, Col, Row, Table, Tooltip} from "antd"
import {PlusOutlined} from "@ant-design/icons";
import CreateStrategyButtonComponent
    from "@/components/configuration/associations/CreateStrategyButton/CreateStrategyButtonComponent";

const columns: any = [
    {
        title: 'Address1',
        dataIndex: 'address',
    },
    {
        title: 'Address2',
        dataIndex: 'address',
    },
    {
        title: 'Address3',
        dataIndex: 'address',
    },
]
const data: any = []
const ConfigurationAssociations: React.FC = () => {
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