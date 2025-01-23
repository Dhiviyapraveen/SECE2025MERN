import {useState,useCallback} from 'react'

const UseCallback = () => {
    var [num,setNum] = useState(0);
  return (
    <div>
        <h1>This is meant for useCallback hook</h1>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
    </div>
  )
}

export default UseCallback