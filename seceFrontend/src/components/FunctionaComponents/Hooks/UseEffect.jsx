import React from 'react'
import {useEffect,useState}from "react";
const UseEffect = () => {
   var[text,setText]=useState("");
   useEffect(()=>{
    console.log(text);
   },[])
     return (
    <div>
      <h1>this  an exmaple of useEffect</h1>
      <input 
      type="text"
       value={text} 
       onChange={(e)=>setText(e.target.value)}/>
       <input type="text"></input>
      <h4>the text is {text}</h4>
    </div>
  )
}

export default UseEffect;
