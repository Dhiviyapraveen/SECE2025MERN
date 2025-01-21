import './App.css'
import Home from './components/FunctionaComponents/Home';
import About from './components/FunctionaComponents/About';
import Gallery from './components/FunctionaComponents/gallery';
import Contact from './components/FunctionaComponents/Contact';
import Nav from './components/FunctionaComponents/Nav';
import Signup from './components/FunctionaComponents/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/gallery" element={<Gallery page="Gallery" img ="time"/>} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/signup" element={<Signup />} ></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App