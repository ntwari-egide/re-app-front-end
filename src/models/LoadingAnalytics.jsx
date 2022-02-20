import { Button, Input, Space } from 'antd';

export const LoadingAnalytics  = () => {
     return <>
     
     <Space direction='vertical' className='bg-white ml-4 p-8 right-0 w-[30vw]'>
         <h1 className='text-center'>Load your electricity</h1>

        <form>
            <Input
                type="number"
                value=""
                style={{
                    width: '70%',
                }}
            />
            <Button type='primary' className='ml-4 w-[20%]'>LOAD</Button>
        </form>

         <p className='font-semibold'>Active token</p>
         <Space direction='horizantal'>
            <p>1234534</p>
            <p className='font-semibold text-green-500'>(10 days remaing)</p>
         </Space>

     </Space>

     <Space direction='vertical' className='bg-white mt-2 ml-4 p-8 right-0 w-[30vw]'>
         <h1 className='text-center'>Check days remaining</h1>

        <form>
            <Input
                type="number"
                value=""
                style={{
                    width: '70%',
                }}
            />
            <Button type='primary' className='ml-4 w-[20%]'>CHECK</Button>
        </form>

         <p className='font-semibold'>Active token</p>
         <Space direction='horizantal'>
            <p>9234534</p>
            <p className='font-semibold text-red-500'>(You have 0 days, buy now!)</p>
         </Space>

     </Space>
     </>
}