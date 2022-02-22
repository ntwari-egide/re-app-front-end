import { Form, Input, Button } from 'antd';
import { PhoneOutlined,UserOutlined,MailOutlined, EyeOutlined} from '@ant-design/icons';
import "../styles/login-style.css"
export const Signup =()=>{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
        return(
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
              <Form.Item
              name="Name"
              rules={[
                {
                  type:'text',
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="Email"
              rules={[
                {
                  type:'email',
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Example@gmail.com" />
            </Form.Item>
            <Form.Item
              name="Phone"
              rules={[
                {
                  type:'number',
                  required: true,
                  message: 'Please input your Phone',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<EyeOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
           
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
              </Button>
            </Form.Item>
      
          </Form>
        )
}