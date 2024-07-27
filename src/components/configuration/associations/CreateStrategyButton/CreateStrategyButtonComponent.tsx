'use client'
import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {Button} from "antd";
import CreateStrategyModal
    from "@/components/configuration/associations/CreateStrategyButton/Modals/CreateStrategyModal";

const CreateStrategyButtonComponent: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <Button
                icon={<PlusOutlined/>}
                iconPosition={'end'}
                onClick={showModal}
                style={{ background: '#f28322', color: '#ffffff' }}
            >
                Crear Estrategia
            </Button>

            <CreateStrategyModal visible={isModalOpen} onClose={closeModal}/>

        </>
    )
}
export default CreateStrategyButtonComponent