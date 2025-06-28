
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import All from './components/All';
import Change from './components/Change';
import Login from './components/Login';
import Movies from './components/Movies';
import News from './components/News';
import Sports from './components/Sports';
import Logout from './components/Logout';
import NewUser from './components/NewUser';
import { useState,useEffect} from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Music from './components/Music';
import Kids from './components/Kids';


function App() {


  return (
    
    <Router>
     <Navbar/>
      <Routes>
          <Route  path='/' element={<ProtectedRoute><All/></ProtectedRoute>}/>
          <Route path='/change' element={<Change/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/new' element={<NewUser/>}/>
          <Route path='/logout' element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
          <Route path='/movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
          <Route path='/news' element={<ProtectedRoute><News/></ProtectedRoute>}/>
          <Route path='/sports' element={<ProtectedRoute><Sports/></ProtectedRoute>}/>
          <Route path='/music' element={<ProtectedRoute><Music/></ProtectedRoute>}/>
          <Route path='/kids' element={<ProtectedRoute><Kids/></ProtectedRoute>}/>

          
      </Routes>
    </Router>
    
  );
}

export default App;
