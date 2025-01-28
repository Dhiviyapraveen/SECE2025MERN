import {useState} from 'react';
import './App.css'
import Home from './components/FunctionaComponents/Home';
import About from './components/FunctionaComponents/About';
import Gallery from './components/FunctionaComponents/Gallery';
import Contact from './components/FunctionaComponents/Contact';
import Nav from './components/FunctionaComponents/Nav';
import Signup from './components/FunctionaComponents/Signup';
import Login from './components/FunctionaComponents/Login';
import UseState from './components/FunctionaComponents/Hooks/UseState';
import UseEffect from './components/FunctionaComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionaComponents/Hooks/UseEffectAPI';
import UseReducer from './components/FunctionaComponents/Hooks/UseReduer';
import UseEffectAPIimage from './components/FunctionaComponents/Hooks/UseEffectAPIimage';
import UseRef from './components/FunctionaComponents/Hooks/UseRef';
import UseMemo from './components/FunctionaComponents/Hooks/UseMemo';
import UseCallback from './components/FunctionaComponents/Hooks/UseCallback';
import List from './components/FunctionaComponents/Hooks/List';
import ReactLifecycleMethods from './components/classComponents/ReactLifecycleMethods';
import UseContext from './components/FunctionaComponents/Hooks/UseContext';
import Memo from './components/FunctionaComponents/Memoization/Memo'
import ClassComponent from './components/classComponents/ClassComponent';
import LazyLoadingWithSuspense from './components/FunctionaComponents/Memoization/LazyLoadingWithSuspense';
import SampleCustomHooks from './components/FunctionaComponents/Hooks/CustomHooks/SampleCustomHooks';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseLocalStorage from './components/FunctionaComponents/Hooks/CustomHooks/UseLocalStorage';
import HoC from './components/FunctionaComponents/Hoc/HoC';
import DarkModeToggle from './components/FunctionaComponents/Hooks/CustomHooks/DarkModeToggle';

function App() {
  /*
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' }); 

  const handleSignup = (username, password) => {
    setUser({ username, password }); 
    alert('Signup successful! Please log in.');
  };

  const handleLogin = (username, password) => {
    
      setIsAuthenticated(true);
   
  };*/
  
  return (
    <>
    <BrowserRouter>
   
    <Routes>
     
            
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App