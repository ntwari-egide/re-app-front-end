import './App.css'
import './styles/global-styles.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { DashboardLayout } from './models/DashboardLayout';
import './styles/dashboard-layout.css'

function App() {
  return (
    <div className="App">
      <DashboardLayout>
        {/* <h3>Go here my brother</h3> */}
      </DashboardLayout>
    </div>
  )
}

export default App
