'use client'
import React, {useState} from "react";
import {Col, ConfigProviderProps, Input, Row, Skeleton, Switch, Table, Tooltip} from 'antd';
import {Button, Modal} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {ValidatedReports} from "@/utils/ValidatedReports";

type SizeType = ConfigProviderProps['componentSize']
const ReportSearchEngineComponent: React.FC = () => {

    const [size, setSize] = useState<SizeType>('large')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState([])

    const columns = [
        {
            title: '# REPORTE',
            dataIndex: 'val_cr_filingnumber',
            key: 'val_cr_filingnumber',
        },
        {
            title: 'TIPO DOC',
            dataIndex: 'val_cr_doctypepatient',
            key: 'val_cr_doctypepatient',
        },
        {
            title: 'DOCUMENTO',
            dataIndex: 'val_cr_documentpatient',
            key: 'val_cr_filingnumber',
        },
        {
            title: 'NOMBRES',
            dataIndex: 'val_cr_firstnamepatient',
            key: 'val_cr_firstnamepatient',
            render: (text:any) => <p>{text}</p>,
        },
        {
            title: 'APELLIDO',
            dataIndex: 'val_cr_firstlastnamepatient',
            key: 'val_cr_firstlastnamepatient',
            render: (text:any) => <p>{text}</p>,
        },
        {
            title: 'TIPO CASO',
            key: 'caseType',
            render: (_:any, record: any) => (
                <p>{record.caseType.cas_t_name?.toUpperCase()}</p>
            )
        }
    ]

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onChange = (checked: boolean) => {

        setTimeout(() => {
            setLoading(!checked)
            setContent(ValidatedReports)
        }, 1000)

    }

    return (
        <>
            <Button
                icon={<SearchOutlined/>}

                size={size}
                onClick={showModal}
            >
                Buscar reporte por Consecutivo, Nombre o Cédula
            </Button>
            <Modal
                title="Búsqueda de reporte"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >

                <div style={{padding: '1rem'}}>
                    <Row style={{marginBottom: '1rem'}}>
                        <Col flex={9}>
                            <Input size={size} autoFocus placeholder="# Reporte, Nombre o Cédula" />
                        </Col>
                        <Col flex={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>

                            <Tooltip title="Buscar">
                                <Button size={size} icon={<SearchOutlined />}>
                                    Buscar Caso
                                </Button>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Switch checked={!loading} onChange={onChange}  style={{ marginBottom: 16 }} />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>

                            <Skeleton loading={loading} />

                            {
                                !loading ? <Table columns={columns} dataSource={content}  /> : undefined
                            }

                        </Col>
                    </Row>

                </div>

            </Modal>
        </>
    )
}
export default ReportSearchEngineComponent