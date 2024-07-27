import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, notification, Select} from "antd";
import {ClearOutlined, SaveOutlined} from "@ant-design/icons";
import {ICaseTypeInterfaceItem} from "@/utils/interfaces/configuration/caseType.interface";
import {findAllCaseTypes} from "@/api/configuration/caseTypes";
import {ICreateEventType} from "@/utils/interfaces/configuration/eventType.interface";
import {createEventType} from "@/api/configuration/eventTypes";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

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

    const [api, contextHolder] = notification.useNotification();
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
            if (!data) setCaseTypes([])

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


    const handleChange = (value, name) => {
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const response = await createEventType(formData)
            .then(() => {
                setFormData({
                    eve_t_casetype_id_fk: null,
                    eve_t_name: '',
                    eve_t_description: ''
                })
                openNotificationWithIcon('success')
                console.log('Formulario enviado correctamente')
            }) // Handle success response
            .catch((error) => {
                console.error(error.message)
                console.error('Error al enviar el formulario')
            }) // Handle error response

    }

    const openNotificationWithIcon = (type: NotificationType) => {
        api.success({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

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
                <Button key={'submit'} type={'primary'}
                        icon={<SaveOutlined/>}
                        onClick={handleSubmit}
                >
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
                    <Select defaultValue={null}
                            placeholder={'Seleccione un tipo de caso'}
                            onChange={(value) => handleChange(value, 'eve_t_casetype_id_fk')}
                            value={formData.eve_t_casetype_id_fk}
                    >
                        {
                            caseTypes?.map((item: any) => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.cas_t_name}
                                </Select.Option>
                            ))
                        }
                    </Select>

                </Form.Item>

                <Form.Item<FieldType>
                    label="Nombre de la Estrategia:"
                    rules={[{required: true}]}
                >
                    <Input onChange={(e) => handleChange(e.target.value, 'eve_t_name')}
                           placeholder="Nombre de la estrategia"
                           value={formData.eve_t_name}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Descripción de la estrategia"
                    rules={[{required: true}]}
                >
                    <TextArea onChange={(e) => handleChange(e.target.value, 'eve_t_description')}
                              placeholder="Descripción de la estrategia" value={formData.eve_t_description}/>
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default CreateStrategyModal