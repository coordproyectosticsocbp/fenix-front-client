import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {ClearOutlined, SaveOutlined} from "@ant-design/icons";
import {ICaseTypeInterfaceItem} from "@/utils/interfaces/configuration/caseType.interface";
import {findAllCaseTypes} from "@/api/configuration/caseTypes";
import {ICreateEventType} from "@/utils/interfaces/configuration/eventType.interface";
import {createEventType} from "@/api/configuration/eventTypes";

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
    const [selectedCaseType, setSelectedCaseType] = useState(null)
    const [formData, setFormData] = useState<ICreateEventType>({
        eve_t_casetype_id_fk: null,
        eve_t_name: '',
        eve_t_description: ''
    })

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

    useEffect( () => {
        if (visible) listCaseTypes()
    }, [visible]);

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const response =  await createEventType(formData)
            .then(() => console.log('Formulario enviado correctamente')) // Handle success response
            .catch(() => console.error('Error al enviar el formulario')) // Handle error response

    }

    //const handleChange = (value: any) => setSelectedCaseType(value) -- Esta era la funcion anterior para el tipo de caso

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
                onFinish={handleSubmit}
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
                        value={formData.eve_t_casetype_id_fk}
                        onChange={handleChange}
                        defaultValue={null}
                        options={(caseTypes || []).map(d => ({
                            value: d.id,
                            label: d.cas_t_name
                        }))}
                        loading={loadingCaseTypes}
                        filterSort={(optionA, optionB) =>
                            (optionA?.value ?? 0) - (optionB?.value ?? 0)
                        }
                    />

                </Form.Item>

                <Form.Item<FieldType>
                    label="Nombre de la Estrategia:"
                    rules={[{required: true}]}
                >
                    <Input onChange={handleChange} placeholder="Nombre de la estrategia" value={formData.eve_t_name}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Descripción de la estrategia"
                    rules={[{required: true}]}
                >
                    <TextArea onChange={handleChange} placeholder="Descripción de la estrategia" value={formData.eve_t_description}/>
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default CreateStrategyModal