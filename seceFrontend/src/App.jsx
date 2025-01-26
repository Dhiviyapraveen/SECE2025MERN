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
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' }); 

  const handleSignup = (username, password) => {
    setUser({ username, password }); 
    alert('Signup successful! Please log in.');
  };

  const handleLogin = (username, password) => {
    if (username === user.username && password === user.password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password!');
    }
  };
  
  return (
    <>
    <BrowserRouter>
    {isAuthenticated ?(
      <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/gallery" element={<Gallery page="Gallery" img ="secelogo"/>} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/react-lifecyclemethods" element={<ReactLifecycleMethods/>} ></Route> 
      <Route path="/use-state" element={<UseState />} ></Route>
      <Route path="/use-effect" element={<UseEffect/>} ></Route>
      <Route path="/use-api" element={<UseEffectAPI/>} ></Route>
      <Route path="/use-image" element={<UseEffectAPIimage/>} ></Route>
      <Route path="/use-reducer" element={<UseReducer/>} ></Route>
      <Route path="/use-ref" element={<UseRef/>} ></Route>
      <Route path="/use-memo" element={<UseMemo/>} ></Route>
      <Route path="/use-callback" element={<UseCallback/>} ></Route>
      <Route path="/use-context" element={<UseContext/>} ></Route>
      <Route path="/memo" element={<Memo/>} ></Route>
      <Route path="/classcomponent" element={<ClassComponent/>} ></Route>
      <Route path="/lazy-suspense" element={<LazyLoadingWithSuspense/>} ></Route>
      <Route path="/custom-hooks" element={<SampleCustomHooks/>} ></Route>
      <Route path="/local-storage" element={<UseLocalStorage/>} ></Route>
      <Route path="/hoc" element={<HoC/>} ></Route>
      <Route path="/darkmodetoggle" element={<DarkModeToggle/>} ></Route>
      
      
     </Routes>
     </>
    ):(
      <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          </Routes>
    )}
    </BrowserRouter>
    </>
  );
}

export default App