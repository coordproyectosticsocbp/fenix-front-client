'use client'
import React, {useState} from "react";
import {Button, Col, ConfigProviderProps, Input, Modal, Row, Skeleton, Table, Tooltip} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {findOneReportValidateByConsecutive} from "@/api/dashboard";
import {IReportSearchItem, IReportSearchList} from "@/utils/interfaces/dashboard/dashboard.interface";
//import {ValidatedReports} from "@/utils/ValidatedReports";

type SizeType = ConfigProviderProps['componentSize']
const ReportSearchEngineComponent: React.FC = () => {

    const [size, setSize] = useState<SizeType>('large')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState<IReportSearchItem[]>([])
    const [inputQuery, setInputQuery] = useState('')

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
            render: (text: any) => <p>{text}</p>,
        },
        {
            title: 'APELLIDO',
            dataIndex: 'val_cr_firstlastnamepatient',
            key: 'val_cr_firstlastnamepatient',
            render: (text: any) => <p>{text}</p>,
        },
        {
            title: 'TIPO CASO',
            key: 'caseType',
            render: (_: any, record: any) => (
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

    const handleInputQuery = (event: any) => {
        setInputQuery(event.target.value)
    }

    const onClick = async () => {

        if (!inputQuery.trim()) {
            alert("Por favor ingresa algún valor en el campo de búsqueda.");
            return;
        }

        try {
            setLoading(true)
            const filterReport = await findOneReportValidateByConsecutive(inputQuery)
            console.log(filterReport)
            setContent(filterReport)
            setLoading(false)

        } catch (e) {
            console.log(e)
        }
        /*setLoading(true)

        setTimeout(() => {
            setLoading(false)
            const filterReport = ValidatedReports.filter((item: any) => item.val_cr_filingnumber.includes(inputQuery))
            setContent(filterReport)
        }, 1000)*/

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
                            <Input size={size}
                                   autoFocus
                                   placeholder="# Reporte, Nombre o Cédula"
                                   onChange={handleInputQuery}
                                   value={inputQuery}
                            />
                        </Col>
                        <Col flex={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>

                            <Tooltip title="Buscar">
                                <Button size={size} icon={<SearchOutlined/>} onClick={onClick}>
                                    Buscar Caso
                                </Button>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>

                            <Skeleton loading={loading}/>
                            {
                                !loading
                                    ? <Table columns={columns} dataSource={content}/>
                                    : !loading
                                        ? <p style={{textAlign: 'center'}}>No se han encontrado registros</p>
                                        : undefined
                            }

                        </Col>
                    </Row>

                </div>

            </Modal>
        </>
    )
}
export default ReportSearchEngineComponent