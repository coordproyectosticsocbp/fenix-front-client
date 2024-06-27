import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {ClearOutlined, SaveOutlined} from "@ant-design/icons";
import {ICaseTypeInterfaceItem} from "@/utils/interfaces/configuration/caseType.interface";
import {findAllCaseTypes} from "@/api/configuration";

type FieldType = {
    caseType: number,
    eventTypeName: string,
    eventTypeDescription: string,
}
const {Option} = Select
const {TextArea} = Input
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
}

interface modalProps {
    visible: boolean,
    onClose: any
}

const CreateStrategyModal = ({visible, onClose}: modalProps) => {

    const [loadingCaseTypes, setLoadingCaseTypes] = useState(true)
    const [caseTypes, setCaseTypes] = useState<ICaseTypeInterfaceItem[]>([])
    const [selectedCaseType, setSelectedCaseType] = useState('')

    const listCaseTypes = async () => {

        try {

            //setLoadingCaseTypes(true)
            const data = await findAllCaseTypes()
            if (!data) {
                setCaseTypes([])
            }
            setCaseTypes(data)
            setLoadingCaseTypes(false)

        } catch (error) {
            setLoadingCaseTypes(false)
            console.log(error)
        }
    }

    useEffect(() => {
        if (visible) listCaseTypes()
    }, [visible]);

    const handleChange = (event: any) => {
        setSelectedCaseType(event.target.value)
    }


    return (
        <Modal
            title="Creación de estrategia"
            open={visible}
            onClose={onClose}
            onCancel={onClose}
            width={700}
            footer={[
                <Button key={'back'} type={'primary'} style={{background: '#FFB996'}} icon={<ClearOutlined/>}>
                    Limpiar
                </Button>,
                <Button key={'submit'} type={'primary'} icon={<SaveOutlined/>}>
                    Crear Estrategia
                </Button>
            ]}
        >

            <Form
                initialValues={{remember: false}}
                autoComplete="off"
                style={{maxWidth: 600, padding: '1rem 0'}}
                {...layout}
            >

                <Form.Item<FieldType>
                    label="Tipo de Caso:"
                    rules={[{
                        required: true,
                        message: 'Debes seleccionar el tipo de caso.'
                    }]}
                >
                    <Select
                        showSearch
                        placeholder={'Selecciona el tipo de caso'}
                        allowClear={true}
                        value={selectedCaseType}
                        onChange={handleChange}
                        options={(caseTypes || []).map(d => ({
                            value: d.id,
                            label: d.cas_t_name
                        }))}
                        loading={loadingCaseTypes}
                    >
                        {/*<Option value="1">Riesgo</Option>
                            <Option value="2">Evento Adverso</Option>
                            <Option value="3">Incidente</Option>
                            <Option value="4">Indicio de Atención Insegura</Option>
                            <Option value="5">Complicaciones</Option>*/}
                    </Select>

                </Form.Item>

                <Form.Item<FieldType>
                    label="Nombre de la Estrategia:"
                    rules={[{required: true}]}
                >
                    <Input placeholder="Nombre de la estrategia"/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Descripción de la estrategia"
                    rules={[{required: true}]}
                >
                    <TextArea placeholder="Descripción de la estrategia"/>
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default CreateStrategyModal