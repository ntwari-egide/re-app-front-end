/**
 * @author: ntwari egide
 * @description: welcome dashboard component
 */

import { Button, Space, Typography } from "antd"
import { DashboardLayout } from "../models/DashboardLayout"
import {AiOutlineUserAdd} from 'react-icons/ai'
import {IoMdAdd} from 'react-icons/io'
import {HiOutlineCubeTransparent} from 'react-icons/hi'

const {Title} = Typography

export const WelcomeDashboard = () => {
    return <DashboardLayout defaultSelectedKeys={1}>
    
    <Title className=" text-xl mt-4 font-medium">Dashboard</Title>

    <div className="w-[70vw] flex flex-row">
        <div className="w-[100%] ">
            <Space size={19} direction="horizontal" className="mt-6 w-full">
                <div className="pt-6 p-4 background_yellow w-[19vw] rounded-md cursor-pointer hover:scale-[1.03]">
                    <AiOutlineUserAdd fontSize={20} color="white" className="ml-[45%]" />
                    <p className="text-center text-white mt-4">Add new user</p>
                </div>

                <div className="pt-6 p-4 bg-white w-[19vw] rounded-md cursor-pointer hover:scale-[1.03]">
                    <IoMdAdd fontSize={20}   className="ml-[45%]" />
                    <p className="text-center text-black mt-4">Add new property</p>
                </div>

                <div className="pt-6 p-4 bg-white w-[19vw] rounded-md cursor-pointer hover:scale-[1.03]">
                    <HiOutlineCubeTransparent fontSize={20} color="black" className="ml-[45%]" />
                    <p className="text-center text-black mt-4">Rent a property</p>
                </div>
            </Space>

            <div className="w-full bg-white p-1 mt-8 h-80 rounded-md">

            </div>
        </div>

        <Space direction="vertical" className="pl-8 ml-4 border-l-[1px] border-neutral-800 h-[82vh]">
            <Button className=" rounded-md w-[16em] border-none background_blue text-white h-12 hover:scale-[1.03]">Add new property</Button>

            <Space direction="vertical" className="bg-white rounded-md w-full h-96 p-6">
dd
            </Space>
        </Space>
    </div>
</DashboardLayout>
}