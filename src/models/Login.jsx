import { Form, Input, Button } from 'antd';
import { MailOutlined, EyeOutlined} from '@ant-design/icons';
import "../styles/login-style.css"
export const Login = (props)=>{
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
            Sign in
          </Button>
        </Form.Item>
       
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password ?
          </a>
        </Form.Item>
  
      </Form>
    )
}