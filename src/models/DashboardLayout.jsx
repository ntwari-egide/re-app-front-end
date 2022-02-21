/**
 * @author: ntwari egide
 * @description: dashboard layout model
 */

import { Layout, Menu, Breadcrumb, Space, Typography } from 'antd';
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
import {MdDashboard} from 'react-icons/md'
import {GoTools} from 'react-icons/go'
import {FiUsers, FiUser} from 'react-icons/fi'
import {MdOutlineLogout} from 'react-icons/md'

const { Header, Content, Footer, Sider } = Layout;

const {Title, Text } = Typography

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
        <Sider theme='light' collapsible  collapsed={collapse} width="18vw" onCollapse={onCollapse}>
          <div className="logo text-center mt-12">
              <Title className="text_color_yellow text-3xl">Re<span className='text-black'>.</span></Title>
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" className='mt-8'>
            <Menu.Item key="1" icon={<MdDashboard fontSize={'20px'} />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<GoTools fontSize={'20px'} />}>
                Properties 
            </Menu.Item>
            <Menu.Item key="9" icon={<FiUsers fontSize={'20px'} />}>
                Members
            </Menu.Item>
            <Menu.Item key="10" icon={<FiUser fontSize={'20px'} />}>
              Profile
            </Menu.Item>
          </Menu>
         
          {
            !collapse ?  <div className='ml-8 mt-40 text_semi_black'>
            <p>Workspace:</p>
            <p className='font-medium'>Rwanda Coding Academy</p>
          </div>: '' 
          }

          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" className='mt-8 logout-button'>
            <Menu.Item key="9" className='' icon={<MdOutlineLogout fontSize={'20px'} />}>
                Logout
            </Menu.Item>
          </Menu>

        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
              
          </Content>
          <Footer style={{ textAlign: 'center' }}>Electrica &copy; 2022 Created by Ntwari Egide</Footer>
        </Layout>
      </Layout>
    );
}