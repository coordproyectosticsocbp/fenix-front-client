import React from "react";
import {Layout} from "antd";
const {Footer} = Layout
const CFooter = () => {
    return (
        <Footer style={{textAlign: 'center'}}>
            @Clinica Bonnadona © {new Date().getFullYear()}
        </Footer>
    )
}

export default CFooter