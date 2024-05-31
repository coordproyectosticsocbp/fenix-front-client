import React from "react";
import {Layout, theme} from "antd";
const {Header} = Layout
const CHeader = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Header style={{padding: 0, background: colorBgContainer}}>
            <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                <p>dd</p>
            </div>
        </Header>
    )
}

export default CHeader