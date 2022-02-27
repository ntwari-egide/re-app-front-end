import { Button, Input, Select, Space, Typography } from "antd"
import { useEffect, useState } from "react";
import { DashboardLayout } from "../models/DashboardLayout"
import { PropertiesTable } from "../models/Table";
import {Form}  from 'antd'
import Modal from "antd/lib/modal/Modal";
import { InfoCircleOutlined } from '@ant-design/icons';

export const PropertiesDashboard = () => {
    const [form] = Form.useForm();

    const [activetab, setactivetab] = useState(1)

    const [isaddnewpropertyrvisible, setaddnewpropertyvisibility] = useState(false)

    const [propertyToDisplay, setPropertyToDisplay] = useState([])

    const {Title} = Typography

    const templatedata = [
        {
          key: '1',
          propertyName: 'Extension',
          rentDate: '12-01-2023',
          rentedBy: 'Gahamanyi Yvette',
          returnDate: '17-01-2023',
          status: 'Returned',
          actions: ['edit','delete']
        },
        {
            key: '2',
            propertyName: 'Computer',
            rentDate: '13-01-2023',
            rentedBy: 'Ntwari Egide',
            returnDate: '17-08-2023',
            status: 'rented',
            actions: ['edit','delete', 'notify']
        },
        {
            key: '3',
            propertyName: 'Extension',
            rentDate: '12-01-2023',
            rentedBy: 'Gahamanyi Yvette',
            returnDate: '17-01-2023',
            status: 'Returned',
            actions: ['edit','delete']
          },
          {
              key: '4',
              propertyName: 'Computer',
              rentDate: '13-01-2023',
              rentedBy: 'Ntwari Egide',
              returnDate: '17-08-2023',
              status: 'rented',
              actions: ['edit','delete', 'notify']
          },
          {
            key: '5',
            propertyName: 'Extension',
            rentDate: '12-01-2023',
            rentedBy: 'Gahamanyi Yvette',
            returnDate: '17-01-2023',
            status: 'Returned',
            actions: ['edit','delete']
          },
          {
            key: '6',
            propertyName: 'Book',
            rentDate: '12-01-2023',
            rentedBy: 'Cyusa Munezero Keny',
            returnDate: '17-01-2023',
            status: 'lost',
            actions: ['edit','delete', 'report']
          },
          {
              key: '7',
              propertyName: 'Computer',
              rentDate: '13-01-2023',
              rentedBy: 'Ntwari Egide',
              returnDate: '17-08-2023',
              status: 'rented',
              actions: ['edit','delete', 'notify']
          },
          {
            key: '8',
            propertyName: 'Computer',
            rentDate: '13-01-2023',
            rentedBy: 'Ntwari Egide',
            returnDate: '17-08-2023',
            status: 'available',
            actions: ['edit','delete', 'rent']
        }
      ];

      useEffect(()=> {
          setPropertyToDisplay(templatedata)
      },[])

      const handleToogling = (tabIndex) => {
        if(tabIndex === 2) {
            let data = []
            setactivetab(2)
            templatedata.map(property => {
                if(property.status === 'lost' ) data.push(property)
            } )
            
            setPropertyToDisplay(data)
        }
        else  if(tabIndex === 1) {
            setactivetab(1)
            setPropertyToDisplay(templatedata)
        }

        else  if(tabIndex === 3) {
            
            let data = []
            setactivetab(3)
            templatedata.map(property => {
                if(property.status === 'available' ) data.push(property)
            } )

            setPropertyToDisplay([])

            setPropertyToDisplay(data)
        }

        else  if(tabIndex === 4) {
            
            let data = []
            setactivetab(4)
            templatedata.map(property => {
                if(property.status === 'rented' ) data.push(property)
            } )

            setPropertyToDisplay([])

            setPropertyToDisplay(data)
        }
      } 

    return (
        <DashboardLayout defaultSelectedKeys={2}>
            <Title className=" text-xl mt-4 font-medium">Properties</Title>

            <Button className="float-right rounded-md w-[16em] border-none background_blue text-white h-12 hover:scale-[1.03] mt-4" onClick={()=> setaddnewpropertyvisibility(true)}>Add new property</Button>

            <Space size={2} direction="horizontal" className="mt-4">
                <Space className={`${ activetab === 1 ? 'background_blue': 'bg-white'} py-2 cursor-pointer hover:scale-[1.03] h-12 w-48 text-center`} onClick={() => handleToogling(1)}>
                    <p className={`text-center w-48 mt-4 ${activetab === 1 ? 'text-white': 'text-black'}`}>All</p>
                </Space>
                <Space className={`${ activetab === 4 ? 'background_blue': 'bg-white'} py-2 cursor-pointer hover:scale-[1.03] h-12 w-48 text-center`} onClick={() => handleToogling(4)}>
                    <p className={`text-center w-48 mt-4 ${activetab === 4 ? 'text-white': 'text-black'}`}>Rented</p>
                </Space>

                <Space className={`${ activetab === 2 ? 'background_blue': 'bg-white'} py-2 cursor-pointer hover:scale-[1.03] h-12 w-48 text-center`} onClick={() => handleToogling(2)}>
                    <p className={`text-center w-48 mt-4 ${activetab === 2 ? 'text-white': 'text-black'}`}>Lost</p>
                </Space>

                <Space className={`${ activetab === 3 ? 'background_blue': 'bg-white'} py-2 cursor-pointer hover:scale-[1.03] h-12 w-48 text-center`} onClick={() => handleToogling(3)}>
                    <p className={`text-center w-48 mt-4 ${activetab === 3 ? 'text-white': 'text-black'}`}>Available</p>
                </Space>
            </Space>

            <Modal title={null} visible={isaddnewpropertyrvisible}  onCancel={() => setaddnewpropertyvisibility(false)} footer={null}>
                    <Title className="text-base text-center font-semibold">Add Property</Title>

                    <div className="px-16 mt-8">
                    <Form
                        form={form}
                        layout="vertical"
                        >
                        
                        <Form.Item
                            label="Property name"
                            tooltip={{ title: 'property name is required', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="please enter property name" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            tooltip={{ title: 'enter property description', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="please enter property description" />
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" className="w-full h-12 background_blue">Create</Button>
                        </Form.Item>
                        </Form>
                    </div>
                </Modal>

            <PropertiesTable data={propertyToDisplay} />
        </DashboardLayout>
    )
}