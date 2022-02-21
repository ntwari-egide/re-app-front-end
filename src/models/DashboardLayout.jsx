/**
 * @author: ntwari egide
 * @description: dashboard layout model
 */

import { Layout, Menu,  Space,  Typography } from 'antd';
import { useState } from 'react';
import "../styles/dashboard-layout.css"
import {MdDashboard} from 'react-icons/md'
import {GoTools} from 'react-icons/go'
import {FiUsers, FiUser} from 'react-icons/fi'
import {MdOutlineLogout} from 'react-icons/md'
import {RiNotification3Line} from 'react-icons/ri'
import { Input } from 'antd';
import {RiSearch2Line} from 'react-icons/ri'

const { Header, Content, Footer, Sider } = Layout;

const {Title, Text } = Typography


export const DashboardLayout = (props) => {

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
         
          <div className='ml-8 mt-40 text_semi_black h-14'>
              {
                !collapse ? 
                <>
                  <p>Workspace:</p>
                  <p className='font-medium'>Rwanda Coding Academy</p>
                </>: ''
              }
          </div>

          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" className={`mt-8 ${!collapse? 'logout-button': ''}`}>
            <Menu.Item key="9" className='' icon={<MdOutlineLogout fontSize={'20px'} />}>
                { !collapse? 'Logout': ''}
            </Menu.Item>
          </Menu>

        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
              <Input size="medium" placeholder="Search" prefix={<RiSearch2Line />} className='w-96 search-input' />
              <div className='float-right leading-6 text-xs mt-2 '>
                <Space direction='horizantal'>
                  <div>
                    <Text className='font-semibold text_semi_black'>Yvette Gahamanyi</Text> <br/>
                    <Text className='text_semi_black'>workspace owner</Text>
                  </div>
                  <div className='mt-3 ml-2 cursor-pointer'>
                    <RiNotification3Line fontSize={'25px'} />
                  </div>
                </Space>
              </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>

            {/* every content will be rendered here */}
            
          {props.children}
              
          </Content>
        </Layout>
      </Layout>
    );
}