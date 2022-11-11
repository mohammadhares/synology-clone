import './index.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import Package from './components/Home/Package';
import ControlPanel from './components/Home/Control';
import FileStation from './components/Home/FileStation';
import HelpDesk from './components/Home/HelpDisk';


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/package-center' element={ <Package />} />
              <Route path='/control-panel' element={ <ControlPanel />} />
              <Route path='/file-station' element={ <FileStation />} />
              <Route path='/help-disk' element={ <HelpDesk />} />
              <Route path='/login' element={ <Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
