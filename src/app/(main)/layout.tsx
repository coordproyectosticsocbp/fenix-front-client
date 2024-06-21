'use client';
import React from "react";
import {ConfigProvider, Layout} from "antd";
import CSider from "@/components/Layout/Dashboard/Sidebar/CSider";
import UserDropdown from "@/components/Layout/Dashboard/UserDropdown/UserDropdown";
import themeConfig from "@/theme/themeConfig";

const MainLayout= ({children,} : {
    children: React.ReactNode
}) => {
    const {Header, Sider, Content, Footer} = Layout

    return (
        <ConfigProvider theme={themeConfig}>
            <Layout style={{minHeight: '100vh'}}>
                <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', borderBottom: '1px dashed #fafafa' }}>
                    <div className="demo-logo">
                        <img src="../favicon.ico" />
                    </div>
                    <UserDropdown />
                </Header>
                <Layout>
                    <Sider collapsible>
                        <CSider />
                    </Sider>
                    <Content style={{padding: '13px'}}>
                        {children}
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </ConfigProvider>

    )

}

export default MainLayout