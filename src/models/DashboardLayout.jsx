/**
 * @author: ntwari egide
 * @description: dashboard layout model
 */

import { Layout, Menu, Breadcrumb, Space } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import "../styles/dashboard-layout.css"
import { PurchaseBillsForm } from './Form';
import { LoadingAnalytics } from './LoadingAnalytics';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DashboardLayout = () => {

    const [collapse, setcollapsed] = useState(false)

    const onCollapse = () => setcollapsed( !collapse)

    const templatedata = [
        {
          key: '1',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
          <div className="logo text-center">
              ELECTRICA
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                Billing groups
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Bills">
              <Menu.Item key="6">Electricity</Menu.Item>
              <Menu.Item key="8">Cash power</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<DesktopOutlined />}>
                Billing Reports
            </Menu.Item>
            <Menu.Item key="10" icon={<FileOutlined />}>
              Purchasing plans
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Bills</Breadcrumb.Item>
              <Breadcrumb.Item>Electricity Bills Service</Breadcrumb.Item>
            </Breadcrumb>
           
                {/* <CustomizedTable data={templatedata} /> */}

                <Space direction="horizontal">
                    <PurchaseBillsForm />

                    <LoadingAnalytics />
                </Space>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Electrica &copy; 2022 Created by Ntwari Egide</Footer>
        </Layout>
      </Layout>
    );
}