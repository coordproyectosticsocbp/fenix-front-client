import React, {useState} from "react";
import {Flex, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const SpinnerComponent = () => {

    return (
        <Flex gap="middle" vertical>
            <Spin spinning={true} indicator={<LoadingOutlined spin />} size="large" />
        </Flex>
    );
}