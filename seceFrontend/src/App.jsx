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


import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
      <Route path="/use-state" element={<UseState />} ></Route>
      <Route path="/use-effect" element={<UseEffect/>} ></Route>
      <Route path="/use-api" element={<UseEffectAPI/>} ></Route>
      <Route path="/use-image" element={<UseEffectAPIimage/>} ></Route>
      <Route path="/use-reducer" element={<UseReducer/>} ></Route>
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