import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionaComponents/Home"
import Footer from './components/FunctionaComponents/Footer'  
import Sample from './components/FunctionaComponents/sample'
import Img from './components/FunctionaComponents/img'
import Content from './components/FunctionaComponents/content'
function App() {
  

  return (
    <>
      <Home/>
      <Footer/>
      <Sample/>
      <Img/>
      <Content/>

      
    </>
  )
}

export default App
