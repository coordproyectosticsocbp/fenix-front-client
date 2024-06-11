import React from "react";
import {Row, Col} from "antd"
import ReportSearchEngineComponent from "@/components/dashboard/ReportSearchEngine/ReportSearchEngineComponent";

const Dashboard: React.FC = () => (
    <div style={{padding: '1rem'}}>

        <Row style={{marginBottom: '2rem'}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <ReportSearchEngineComponent />
            </Col>
        </Row>

        <Row style={{marginBottom: '2rem'}}>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>

    </div>
)
export default Dashboard