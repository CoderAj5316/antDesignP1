import './App.css';

import TopView from './component/TopView';
import FormComponent from './component/FormComponent';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
        <div className='innerDiv0'>
          <TopView/>
          <FormComponent/>
        </div>
    
    </div>
  );
}

export default App;
