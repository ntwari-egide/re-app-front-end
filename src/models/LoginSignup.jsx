import { Layout,Button} from 'antd';
const {  Content } = Layout;
import pic1 from"../pic/RE.png"
import "../styles/LoginSignup-style.css"
import { Signup } from './signup';
export const LoginSignup = (props)=>{
    return(
        <Content style={{ padding: '0 50px',overflow:'hidden' }}>
        <div className="site-layout-content">
            <p className='words'>RE.</p>
    <div className='image-layout'>
        <img src={pic1} alt="HomePic" width="400" />
    </div>
    <div className="auth-layout">
        <div className='button'>
        <Button type="text" style={{color:'#E9CB53',backgroundColor:'white'}}>Sign In </Button>
    <Button type="text" style={{ backgroundColor:'#E9CB53',color:'white'}}>Sign Up</Button>
        </div>
        <Signup></Signup>
    </div>
    <p className='community-text'>Is your community new to Rent?</p>
    <a href="" className='link-1'> create your workspace</a>
        </div>
      </Content>
    )
}