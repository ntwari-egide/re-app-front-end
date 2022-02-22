import './App.css'
import './styles/global-styles.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './styles/dashboard-layout.css'
import Routing from './models/Routing';

function App() {
  return (
    <div className="App">
 <Routing></Routing>
    </div>
  )
}

export default App
