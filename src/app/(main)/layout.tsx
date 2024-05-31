'use client'
import React from "react";
import {Layout} from "antd";
import CHeader from "@/components/Layout/Dashboard/Header/CHeader";
import CFooter from "@/components/Layout/Dashboard/Footer/CFooter";
import CSider from "@/components/Layout/Dashboard/Sidebar/CSider";
import CBreadcrumb from "@/components/Layout/Dashboard/Breadcrumb/CBreadcrumb";

const {Content} = Layout

export default function MainLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <CSider/>
            <Layout>
                <CHeader/>
                <Content style={{margin: '0 16px', padding: '.8rem'}}>
                    {/*<CBreadcrumb/>*/}
                    <main style={{
                        padding: 24,
                        minHeight: 360,
                        background: "lightgray",
                        borderRadius: '1rem',
                    }}>
                        {children}
                    </main>
                </Content>
                <CFooter/>
            </Layout>
        </Layout>
    );
}