/**
 * @author: ntwari egide
 * @description: memebers dashboard component
 */

import { Button, Space, Typography } from "antd"
import { AiOutlineUserAdd } from "react-icons/ai"
import { HiOutlineCubeTransparent } from "react-icons/hi"
import { IoMdAdd } from "react-icons/io"
import { DashboardLayout } from "../models/DashboardLayout"

const {Title} = Typography

export const MembersDashboardComponent = () => {
    return (
        <DashboardLayout defaultSelectedKeys={3}>
            <Title className=" text-xl mt-4 font-medium">Members</Title>

        <div className="w-[75vw] flex flex-row">
            <div className="w-[100%] ">

                <div className="w-full bg-white p-1 mt-8 h-80 rounded-md">
                    
                </div>
            </div>

            <Space direction="vertical" className="pl-8 ml-4 border-l-[1px] border-neutral-800 h-[82vh]">
                <Button className=" rounded-md w-[16em] border-none background_blue text-white h-12 hover:scale-[1.03]">Add new member</Button>

                <Space direction="vertical" className="bg-white rounded-md w-full h-96 p-6">
        dd
                </Space>
            </Space>
        </div>
        </DashboardLayout>
    )
}