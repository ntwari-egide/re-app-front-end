/**
 * @author: ntwari egide
 * @description: memebers dashboard component
 */

import { Button, Input, Select, Space, Typography } from "antd"
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

import { DashboardLayout } from "../models/DashboardLayout"
import { MembersTable } from "../models/MembersTable";
import { InfoCircleOutlined } from '@ant-design/icons';
import {Form}  from 'antd'
import { Option } from "antd/lib/mentions";

const {Title} = Typography


export const MembersDashboardComponent = () => {

    const [isaddnewmembervisible, setaddnewmembervisibility] = useState(false)

    
    const templatedata = [
        {
          key: '1',
          name: 'Gahamanyi Yvette',
          class: 'Y3 B',
          registeredAt: '12-01-2023',
          status: 'paused',
          actions: ['edit','delete', 'report']
        },

        {
            key: '2',
            name: 'Ntwari Egide',
            class: 'Y3 B',
            registeredAt: '03-01-2023',
            status: 'active',
            actions: ['edit','delete', 'notify', 'report']
          }
      ];

      const [form] = Form.useForm();

    return (
        <DashboardLayout defaultSelectedKeys={3}>
            <Title className=" text-xl mt-4 font-medium">Members</Title>

        <div className="w-[75vw] flex flex-row">
            <div className="w-[100%] ">

                <div className="w-full bg-white p-1 mt-8 h-80 rounded-md">
                    <MembersTable data={templatedata} />
                </div>
            </div>

            <Space direction="vertical" className="pl-8 ml-4 border-l-[1px] border-neutral-800 h-[82vh]">
                <Button className=" rounded-md w-[16em] border-none background_blue text-white h-12 hover:scale-[1.03]" onClick={()=> setaddnewmembervisibility(true)}>Add new member</Button>

                {/* rendering the content of add new member */}

                <Modal title={null} visible={isaddnewmembervisible}  onCancel={() => setaddnewmembervisibility(false)} footer={null}>
                    <Title className="text-base text-center font-semibold">Add member</Title>

                    <div className="px-16 mt-8">
                    <Form
                        form={form}
                        layout="vertical"
                        >
                        
                        <Form.Item label="First name" required tooltip="This is a required field">
                            <Input placeholder="please enter first name" />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            tooltip={{ title: 'last name is required', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="please enter last name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            tooltip={{ title: 'enter email for verificatoin', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="please enter email" />
                        </Form.Item>
                        <Form.Item
                            label="Class"
                            tooltip={{ title: 'Class is used to locate a member', icon: <InfoCircleOutlined /> }}
                        >
                              <Select defaultValue="2">
                                <Option value="1">Year 1 A</Option>
                                <Option value="2">Year 1 B</Option>
                                <Option value="3">Year 1 C</Option>
                                <Option value="4">Year 2 A</Option>
                                <Option value="5">Year 2 B</Option>
                                <Option value="6">Year 2 C</Option>
                                <Option value="7">Year 3 A</Option>
                                <Option value="8">Year 3 B</Option>
                                <Option value="9">Year 3 C</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="w-full h-12 background_blue">Create</Button>
                        </Form.Item>
                        </Form>
                    </div>
                </Modal>

                <Space direction="vertical" className="bg-white rounded-md w-full h-96 p-6">
        dd  
                </Space>
            </Space>
        </div>
        </DashboardLayout>
    )
}