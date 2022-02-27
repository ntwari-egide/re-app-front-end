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
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { BoxLegendSvg } from "@nivo/legends";

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

      const data = [
        {
          id: "rented",
          label: "Rented",
          value: 210,
          color: "#FEB211"
        },
        {
          id: "lost",
          label: "Lost",
          value: 175,
          color: "#F1F3F2"
        },
        {
          id: "available properties",
          label: "javascript",
          value: 410,
          color: "#0597F2"
        }
      ];

    return (
        <DashboardLayout defaultSelectedKeys={3} isMenuCollapsed={false}>
            <Title className=" text-xl mt-4 font-medium">Members</Title>

        <div className="w-[75vw] flex flex-row">
            <div className="w-[100%] ">

                <div className="w-full bg-white p-1 mt-8 h-80 rounded-md">
                    <MembersTable data={templatedata} />
                </div>
            </div>

            <Space direction="vertical" className="pl-8 ml-4 border-l-[1px] border-neutral-800 h-[82vh]">
                <Button className=" rounded-md w-[18em] border-none background_blue text-white h-12 hover:scale-[1.03]" onClick={()=> setaddnewmembervisibility(true)}>Add new member</Button>

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
                
                <Pie
                    width={200}
                    height={200}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    colors={['#0597F2','#FEB211','#F1F3F2']}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colorBy="id"
                    borderColor="inherit:darker(0.6)"
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor="inherit"
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    theme={{
                        tooltip: {
                        container: {
                            fontSize: "13px"
                        }
                        },
                        labels: {
                        text: { color: "#555" }
                        }
                    }}
                    />

                    <ThemeProvider>
                        <SvgWrapper
                            height={100}
                            width={200}
                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <BoxLegendSvg
                            anchor="center"
                            data={data}
                            containerWidth={400}
                            containerHeight={100}
                            height={100}
                            width={200}
                            direction="row"
                            itemWidth={90}
                            itemHeight={20}
                            itemsSpacing={15}
                            padding={10}
                            symbolSize={12}
                            symbolShape="square"
                            />
                        </SvgWrapper>
                        </ThemeProvider>
                </Space>
            </Space>
        </div>
        </DashboardLayout>
    )
}