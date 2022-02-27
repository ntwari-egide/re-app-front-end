import './App.css'
import './styles/global-styles.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { DashboardLayout } from './models/DashboardLayout';
import './styles/dashboard-layout.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { WelcomeDashboard } from './views/WelcomeDashboard';
import { PropertiesDashboard } from './views/PropertiesDashboard';
import { MembersDashboardComponent } from './views/MembersDashboard';
import { ProfileDashboard } from './views/ProfileDashboard';



function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/welcome-dashboard'} component={WelcomeDashboard} />  
        <Route path={'/properties'} component={PropertiesDashboard} /> 
        <Route path={'/members'} component={MembersDashboardComponent} /> 
        <Route path={'/profile'} component={ProfileDashboard} /> 
      </Switch>  
    </Router>
  )
}

export default App
