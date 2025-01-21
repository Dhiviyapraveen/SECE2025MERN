import {useState} from 'react';
import './App.css'
import Home from './components/FunctionaComponents/Home';
import About from './components/FunctionaComponents/About';
import Gallery from './components/FunctionaComponents/Gallery';
import Contact from './components/FunctionaComponents/Contact';
import Nav from './components/FunctionaComponents/Nav';
import Signup from './components/FunctionaComponents/Signup';
import Login from './components/FunctionaComponents/Login';


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