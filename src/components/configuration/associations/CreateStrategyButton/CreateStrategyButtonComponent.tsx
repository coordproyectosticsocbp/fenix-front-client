'use client'
import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {Button, Form, Input, Modal, Select} from "antd";

type FieldType = {
    caseType: number,
    eventTypeName: string,
    eventTypeDescription: string,
}
const {Option} = Select
const { TextArea } = Input
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const CreateStrategyButtonComponent: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <Button
                type="dashed"
                icon={<PlusOutlined/>}
                iconPosition={'end'}
                onClick={showModal}
            >
                Crear Estrategia
            </Button>
            <Modal
                title="Creación de estrategia"
                open={isModalOpen}
                onClose={closeModal}
                onCancel={closeModal}
                width={700}
                footer={null}
            >
                <Form
                    initialValues={{remember: false}}
                    autoComplete="off"
                    style={{ maxWidth: 600, padding: '1rem 0' }}
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
                            placeholder={'Selecciona el tipo de caso'}
                            allowClear={true}
                        >
                            <Option value="1">Riesgo</Option>
                            <Option value="2">Evento Adverso</Option>
                            <Option value="3">Incidente</Option>
                            <Option value="4">Indicio de Atención Insegura</Option>
                            <Option value="5">Complicaciones</Option>
                        </Select>

                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Nombre de la Estrategia:"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Nombre de la estrategia" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Descripción de la estrategia"
                        rules={[{ required: true }]}
                    >
                        <TextArea placeholder="Descripción de la estrategia" />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}
export default CreateStrategyButtonComponent