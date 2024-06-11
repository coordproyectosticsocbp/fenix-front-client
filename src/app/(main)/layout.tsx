'use client';
import React, {ReactNode} from "react";
import {Layout} from "antd";
import CSider from "@/components/Layout/Dashboard/Sidebar/CSider";
import UserDropdown from "@/components/Layout/Dashboard/UserDropdown/UserDropdown";

const MainLayout= ({children,} : {
    children: React.ReactNode
}) => {
    const {Header, Sider, Content, Footer} = Layout

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
    )

}

export default MainLayout