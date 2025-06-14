
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import All from './components/All';
import Change from './components/Change';
import Login from './components/Login';
import Movies from './components/Movies';
import News from './components/News';
import Sports from './components/Sports';
import Logout from './components/Logout';


function App() {
  return (
    
    <Router>
     <Navbar/>
      <Routes>
          <Route exact path='/' element={<All/>}/>
          <Route path='/change' element={<Change/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/sports' element={<Sports/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
