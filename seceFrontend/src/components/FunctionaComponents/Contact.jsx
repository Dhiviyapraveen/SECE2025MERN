import {useState} from 'react'

const Contact = () => {
    const [a,setA] = useState(0);/*state - value , function */
    const handleIncrement = () =>{
        setA(a+1);
    }
  return (
    <div>
        <h1>This is a state example</h1>
        <h4>{a}</h4>
        <button onClick={handleIncrement}>+</button>

    </div>
  )
}

export default Contact