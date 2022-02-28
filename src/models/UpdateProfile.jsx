/**
 * @author: ntwari egide
 * @description: update profile content page
 */

import { Button, Col, Divider, Image, Input, Row, Space, Typography } from 'antd'

const { Title } = Typography


export const UpdateProfilePage = () => {
    return (
        <>
            <Space className='mt-16 transparent_violet_bg w-full h-64'>`</Space>
                        <Row>
                            <Col span={6}>
                                <div className=' -mt-[65px] ml-16 rounded-full border-white border-4 w-fit h-[160px]'>
                                    <Image 
                                        src='https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                        preview={false}
                                        height={150}
                                        width={150}
                                        className='rounded-full object-cover '
                                    />
                                </div>
                            </Col>
                            <Col span={18}>
                                <Title className='text-2xl mt-4 text-gray-800'>
                                    Profile
                                </Title>
                                <p className='text-gray-800 font-normal'>Update your photo and personal details</p>
                            </Col>
                        </Row>

                        <Row className='mt-16'>
                            <Col span={6}>
                                <div className='ml-16 mt-3'>
                                    <p>First name</p>
                                </div>
                            </Col>
                            <Col span={18}>
                                <Input value={'Munyankumburwa'} className='w-2/5' />
                            </Col>
                        </Row>

                        <Divider />
                        <Row className='mt-16'>
                            <Col span={6}>
                                <div className='ml-16 mt-3'>
                                    <p>Second name</p>
                                </div>
                            </Col>
                            <Col span={18}>
                                <Input value={'Evangeriste'} className='w-2/5' />
                            </Col>
                        </Row>
                        <Divider />

                        <Row className='mt-16'>
                            <Col span={6}>
                                <div className='ml-16 mt-3'>
                                    <p>Email </p>
                                </div>
                            </Col>
                            <Col span={18}>
                                <Input value={'evangeristemunya@gmail.com'} className='w-2/5' />
                            </Col>
                        </Row>
                        <Divider />

                        <Button className='pure_violet_bg text-white h-12 w-[20vw] mt-16 rounded-md'>Update</Button>
        </>
    )
}