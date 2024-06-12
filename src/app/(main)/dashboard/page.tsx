import React from "react";
import {Button, Col, Row} from "antd"
import ReportSearchEngineComponent from "@/components/dashboard/ReportSearchEngine/ReportSearchEngineComponent";
import {FileAddOutlined} from "@ant-design/icons";
import StatisticsComponent from "@/components/dashboard/Statistics/StatisticsComponent";

const Dashboard: React.FC = () => (
    <div style={{padding: '1rem'}}>

        <Row style={{marginBottom: '2rem'}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <ReportSearchEngineComponent/>
            </Col>
        </Row>

        <Row style={{marginBottom: '2rem'}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <Button type={"primary"} icon={<FileAddOutlined/>} size={"large"}>
                    Crear Reporte
                </Button>
            </Col>
        </Row>

        <Row>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <StatisticsComponent/>
            </Col>
        </Row>

    </div>
)
export default Dashboard