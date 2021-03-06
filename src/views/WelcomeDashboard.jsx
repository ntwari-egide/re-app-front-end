/**
 * @author: ntwari egide
 * @description: welcome dashboard component
 */

import { Button, Col, Divider, Row, Space, Typography } from "antd"
import { DashboardLayout } from "../models/DashboardLayout"
import {AiOutlineUserAdd} from 'react-icons/ai'
import {IoMdAdd} from 'react-icons/io'
import {HiOutlineCubeTransparent} from 'react-icons/hi'
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { BoxLegendSvg } from "@nivo/legends";

const {Title} = Typography

export const WelcomeDashboard = () => {

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

    return <DashboardLayout defaultSelectedKeys={1}>
    
    <Title className=" text-xl mt-4 font-medium">Dashboard</Title>

    <Row className="flex flex-row" isMenuCollapsed={false}>
        <Col span={18}>
            <Row size={19} direction="horizontal" className="mt-6 w-full">
                <Col span={7} className="pt-6 p-4 background_yellow rounded-md cursor-pointer hover:scale-[1.03]">
                    <AiOutlineUserAdd fontSize={20} color="white" className="ml-[45%]" />
                    <p className="text-center text-white mt-4">Add new user</p>
                </Col>

                <Col span={7}  className="pt-6 p-4 ml-12 w-fit bg-white rounded-md cursor-pointer hover:scale-[1.03]">
                    <IoMdAdd fontSize={20}   className="ml-[45%]" />
                    <p className="text-center text-black mt-4">Add new property</p>
                </Col>

                <Col span={7}  className="pt-6 ml-12 p-4 bg-white rounded-md cursor-pointer hover:scale-[1.03]">
                    <HiOutlineCubeTransparent fontSize={20} color="black" className="ml-[45%]" />
                    <p className="text-center text-black mt-4">Rent a property</p>
                </Col>
            </Row>

            <div className="w-[98%] bg-white p-1 mt-8 h-80 rounded-md">

            </div>
        </Col>

        <Col span={6} className="pl-8 border-l-[1px] border-neutral-200 h-[82vh]">
            <Button className=" rounded-md w-full border-none background_blue text-white h-12 hover:scale-[1.03]">Add new property</Button>

            <Space direction="vertical" className="bg-white rounded-md mt-8 w-full h-96 p-6">
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
        </Col>
    </Row>
</DashboardLayout>
}