import { useState } from 'react'
const UseState = () => {
  var initialValue=0;
  var[num,setNum]=useState(initialValue);
  
  return (
    <div>
      <h1>this is usestate example</h1>
      <button onMouseEnter={()=>setNum(num+1)}>+</button>
      <h4>the number is {num}</h4>
      <button onKeyDown={()=>setNum(num-1)}>-</button>
      <button onDoubleClick={()=>setNum(0)}>reset</button>
    </div>
  )
}

export default UseState;
