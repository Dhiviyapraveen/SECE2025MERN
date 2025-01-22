import React from 'react'
import{useEffect,useState} from 'react';
import axios from 'axios';

const UseEffectAPI = () => {
    var[post,setPost] =useState([])
    useEffect(()=>{
        var response=axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
       <h2>This page is ment for useEffect API.</h2>
       <h3>The content inside my JSONplaceholder API posts</h3>
       <ul>
        {post.map((element)=>(
         <li key={element.id}style={{listStyleType:"number"}}>{element.title}</li>
       ))}
       </ul>
    </div>
  )
}

export default UseEffectAPI


