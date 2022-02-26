/* eslint-disable array-callback-return */
/**
 * @author: ntwari egide
 * @description: table model
 */

import { Space, Table, Tag } from 'antd';
import {AiOutlineEdit, AiOutlineDelete, AiOutlineBell} from 'react-icons/ai'

const { Column } = Table;

export const PropertiesTable = ({data}) => {
    return <Table dataSource={data} className="mt-8">
    
    <Column title="Property" dataIndex="propertyName" key="propertyName" />
    <Column title="Rent Date" dataIndex="rentDate" key="rentDate" />
    <Column title="Renter" dataIndex="rentedBy" key="rentedBy" />
    <Column title="Return Date" dataIndex="returnDate" key="returnDate" />
    <Column 
      title="Status" 
      dataIndex="status" 
      key="status"
      render={ status => {
        if(status  === 'Returned') return <Tag color='green'>returned</Tag>
        else if(status  === 'rented') return <Tag color='yellow'>rented</Tag>
        else if(status  === 'available') return <Tag color='blue'>available</Tag>
        else if(status  === 'lost') return <Tag color='red'>lost</Tag>
      }}
    />
    <Column
      title="Actions"
      dataIndex="actions"
      key="actions"
      render={actions => (
        <>
          <Space direction='horizontal'>
            {actions.map(action => {
              if(action === 'edit') return <AiOutlineEdit color='#E9CB53' fontSize={20} className="cursor-pointer hover:scale-[1.2]" />
              else if(action === 'delete') return <AiOutlineDelete color='#C80000' fontSize={20} className="cursor-pointer hover:scale-[1.2]" />
              else if(action === 'notify') return <AiOutlineBell color='#007F00' fontSize={20} className="cursor-pointer hover:scale-[1.2]" />
              else if(action === 'rent') return <Tag className='cursor-pointer' color='blue'>RENT</Tag>
              else if(action === 'report') return <Tag className='cursor-pointer' color='blue'>REPORT</Tag>
            })}
          </Space>
        </>
      )}
    />
  </Table>
}