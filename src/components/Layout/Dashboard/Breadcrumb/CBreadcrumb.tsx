import React from "react";
import {Breadcrumb} from "antd";
const CBreadcrumb = () => {
    return (
        <Breadcrumb style={{margin: '16px 0'}} items={[
            {
                title: 'Home',
            },
            {
                title: <a href="">Application Center</a>,
            },
            {
                title: <a href="">Application List</a>,
            },
            {
                title: 'An Application',
            },
        ]} />
    )
}
export default CBreadcrumb