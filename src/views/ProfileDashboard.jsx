import { Checkbox, Col, Row, Space, Typography , Button} from 'antd'
import { useState } from 'react'
import {FiUsers, FiUser} from 'react-icons/fi'
import { AiOutlineBell } from 'react-icons/ai'
import {DashboardLayout} from '../models/DashboardLayout'
import { UpdateProfilePage } from '../models/UpdateProfile'
import { UpdateNotificationSettingsPage } from '../models/UpdateNotificationSetting'

const {Title} = Typography

export const ProfileDashboard = () => {

    const [activetab,setactivetab] = useState(1)

    return (
        
        <DashboardLayout defaultSelectedKeys={4} isMenuCollapsed={true}>
            <Row className='mb-16'>
                <Col span={3}>
                    <Space direction='vertical' className='bg-white w-2/5 mt-16 h-64 rounded-md pt-8 sticky top-8'> 
                        <div className={`${activetab === 1 ? 'active-tab': ''} pl-6 h-12 pt-3 cursor-pointer`} onClick={()=> setactivetab(1)}>
                            <FiUser fontSize={20} />
                        </div>
                        <div className={`${activetab === 2 ? 'active-tab': ''} pl-6 h-12 pt-3 cursor-pointer`} onClick={()=> setactivetab(2)}>
                            <AiOutlineBell fontSize={20} />
                        </div>
                        <div className={`${activetab === 3 ? 'active-tab': ''} pl-6 h-12 pt-3 cursor-pointer`} onClick={()=> setactivetab(3)}>
                            <FiUsers fontSize={20} />
                        </div>
                    </Space>
                </Col>
                <Col span={21}>
                {
                activetab === 1 ? <UpdateProfilePage />: activetab === 2 ? <UpdateNotificationSettingsPage />:''
            }
                </Col>
            </Row>

            
        </DashboardLayout>
    )
}