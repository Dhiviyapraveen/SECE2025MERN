import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/FunctionaComponents/Home"
import Footer from './components/FunctionaComponents/Footer'  
import Sample from './components/FunctionaComponents/sample'
import Img from './components/FunctionaComponents/img'
import Content from './components/FunctionaComponents/content'
import ClassComponent from './components/classComponents/ClassComponent'
import Gallery from './components/FunctionaComponents/Gallery'
import Contact from './components/FunctionaComponents/Contact'
import About from './components/FunctionaComponents/About'

function App() {
  

  return (
    <>
      <Home/>
      <Footer/>
      <Sample/>
      <Img/>
      <Content/>
      <ClassComponent/>
      <Gallery image="sece logo" page="secelogo"/>
      <Contact/>
      <About/>

      
    </>
  )
}

export default App
