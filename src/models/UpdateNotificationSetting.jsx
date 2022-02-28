import { Button, Typography, Checkbox } from "antd"

const {Title} = Typography

export const UpdateNotificationSettingsPage = () => {
    return (
        <>
        <Title className='text-xl mt-16 text-slate-800'>Notification Settings</Title>

        <p className='text-slate-800 mt-8'>Here you can choose how you will be gating your notification</p>

        <div className='mt-4'>
            <Checkbox 
            checked 
            >
                Turn off notifications
            </Checkbox>
        </div>
        <div className='mt-4'>
            <Checkbox 
                checked 
                disabled
            >
                Send notification to email
            </Checkbox>
        </div>

        <div className='mt-4'>
            <Checkbox 
                checked={false}
            >
                Email me when there is new product in the stock
            </Checkbox>
        </div>

        <div className='mt-4'>
            <Checkbox 
                checked={true}
            >
                Email me on every notification on rented materials
            </Checkbox>
        </div>

        <div className='mt-4'>
            <Checkbox 
                checked={true}
            >
                Allow <strong>Re.</strong> to access you location and audio settings
            </Checkbox>
        </div>

        <Button className='pure_violet_bg text-white h-12 w-[20vw] mt-16 rounded-md'>Update</Button>
        </>
    )
}