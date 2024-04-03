
import React  from 'react';
import './App.css';

import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './Components/Login';
import Home from './Components/Home';
import TrackBus from './Components/TrackBus';
import MngStaff from './Components/MngStaff';
import Mngstd from './Components/Mngstd';
import AddBusRoute from './Components/AddBusRoute';
import MngPayment from './Components/MngPayment';
import AddStaff from './Components/AddStaff';
import UpdateNotifications from './Components/UpdateNotifications';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <>
     <Header/>
       <BrowserRouter>
       
                <Routes>
                    <Route exact path='/' element={<Login/>} />
                    <Route exact path="/Home" element={<Home />}/>
                    <Route exact path="/TrackBus" element={<TrackBus/>}/>
                    <Route exact path="/MngStaff" element={<MngStaff/>}/>
                    <Route exact path="/Mngstd" element={<Mngstd/>}/>
                    <Route exact path="/AddBusRoute" element={<AddBusRoute />}/>
                    <Route exact path="/MngPayment" element={<MngPayment />}/>
                    <Route exact path="/AddStaff"   element={<AddStaff/>}/>
                    <Route exact path="/UpdateNotifications" element={<UpdateNotifications/>}/>

                </Routes>
            </BrowserRouter>
     
            </>
    </div>
    
  );
}

export default App;
