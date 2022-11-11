import './index.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Package from './components/Pages/Package';
import ControlPanel from './components/Pages/Control';
import FileStation from './components/Pages/FileStation';
import HelpDesk from './components/Pages/HelpDisk';


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
