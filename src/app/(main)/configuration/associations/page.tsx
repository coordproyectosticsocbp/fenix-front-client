'use client'
import React, {useEffect, useState} from "react";
import {Button, Col, Row, Skeleton, Space, Table} from "antd"
import CreateStrategyButtonComponent
    from "@/components/configuration/associations/CreateStrategyButton/CreateStrategyButtonComponent";
import {IEventTypeItem} from "@/utils/interfaces/configuration/eventType.interface";
import {getEventTypes} from "@/api/configuration/eventTypes";
import {DeleteOutlined, EyeOutlined, LoadingOutlined, ReloadOutlined} from "@ant-design/icons";

const columns: any = [
    {
        title: 'Estrategia',
        dataIndex: 'eve_t_name',
        key: 'eve_t_name'
    },
    {
        title: 'Cantidad de Sucesos',
        dataIndex: 'event',
        key: 'event',
        render: (item: any) => <p>{item.length}</p>
    },
    {
        title: 'Tipo de caso',
        dataIndex: 'caseType',
        key: 'caseType',
        render: (item: any) => <p>{item.cas_t_name}</p>
    },
    {
        title: 'Acciones',
        dataIndex: 'actions',
        key: 'actions',
        render: (record:any) => (
            <Space size={'small'}>
                <Button size={'small'} type="primary" title={'Ver Sucesos'} shape="circle" icon={<EyeOutlined />} />
                <Button size={'small'} title={'Eliminar Estrategia '}
                        shape="circle"
                        icon={<DeleteOutlined />}
                        style={{background: '#ff4d4f', color: '#ffffff'}}
                />
            </Space>
        )
    },
]
const data: any = []
const ConfigurationAssociations: React.FC = () => {

    const [loadingEventType, setLoadingEventType] = useState(true)
    const [eventType, setEventType] = useState<IEventTypeItem[]>([]);

    const listEventTypes = async () => {
        setLoadingEventType(true)
        try {
            const data = await getEventTypes()
            if (!data) setEventType([])

            setEventType(data)
            setLoadingEventType(false)

        } catch (error) {
            setLoadingEventType(false)
            console.log(error)
        }
    }

    useEffect(() => {
        listEventTypes()
    }, []);

    return (
        <div style={{padding: '1rem'}}>

            <Row style={{marginBottom: '2rem'}}>
                <Col span={24} style={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                    <Button icon={!loadingEventType ? <ReloadOutlined/> : <LoadingOutlined/>}
                            iconPosition={'end'}
                            onClick={listEventTypes}
                            style={{background: '#002140', color: '#ffffff'}}
                    >
                        Recargar
                    </Button>
                    <CreateStrategyButtonComponent/>
                </Col>
            </Row>

            <Row style={{marginBottom: '2rem'}}>
                <Col span={24}>

                    <Skeleton loading={loadingEventType}/>

                    {
                        !loadingEventType && eventType.length
                            ? <Table
                                columns={columns}
                                dataSource={eventType}
                                bordered
                                rowKey={'id'}
                                size={'middle'}
                            />
                            : ''
                    }


                </Col>
            </Row>

        </div>
    )
}

export default ConfigurationAssociations;