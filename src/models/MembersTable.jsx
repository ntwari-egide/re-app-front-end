/* eslint-disable array-callback-return */
/**
 * @author: ntwari egide
 * @description: table model
 */

import { Space, Table, Tag } from 'antd';
import {AiOutlineEdit, AiOutlineDelete, AiOutlineBell, AiOutlinePhone} from 'react-icons/ai'
import Avatar from 'react-avatar';

const { Column } = Table;

export const MembersTable = ({data}) => {
    return <Table dataSource={data} className="mt-8">
    
    <Column 
      title="Profile" 
      dataIndex="name" 
      key="name" 
      render= { name => <Avatar name={name} size={'20'} className=" rounded-full text-sm h-12 w-12 cursor-pointer" /> }
    />
    <Column title="Full names" dataIndex="name" key="name" />
    <Column title="Class" dataIndex="class" key="class" />
    <Column title="Joined At" dataIndex="registeredAt" key="registeredAt" />
    <Column 
      title="Status" 
      dataIndex="status" 
      key="status"
      render={ status => {
        if(status  === 'active') return <Tag color='green'>active</Tag>
        else if(status  === 'postponed') return <Tag color='red'>post poned</Tag>
        else if(status  === 'paused') return <Tag color='blue'>paused</Tag>
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
              else if(action === 'call') return <AiOutlinePhone color='red' fontSize={20} className="cursor-pointer hover:scale-[1.2]" />
              else if(action === 'report') return <Tag className='cursor-pointer' color='blue'>REPORT</Tag>
            })}
          </Space>
        </>
      )}
    />
  </Table>
}